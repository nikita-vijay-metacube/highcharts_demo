import React, { useState, useEffect } from 'react';
import axios from "axios";
import Highcharts, { arrayMax } from 'highcharts/highstock';
import PieChart from "highcharts-react-official";
import './Pie.css';

function Pie() {
  const [allDesc, setAllDesc] = useState([
    {
      name:'one',
      y:1
    },
    {
      name:'two',
      y:1
    },
  ]);
  const [desc, setDesc] = useState([
    {
      name:'one',
      data:[['James',90],['Jonas',60]]
    }
  ]);
  const [data, setData] = useState([
        {
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }
      ]);
  const axios = require('axios');
  const options = {
    
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Subjects Divided in Students'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        },
        point: {
          events: {
            // dblclick() {
            // flag = false
            //   alert("dblclick");
            //   setTimeout(function() {
            //     flag = true
            //   }, 200)
            // },
            click(e) {
              var  flag = true
                // setTimeout(function(){
                  if(flag) {
                    console.log("point",e.point)
                  // alert(e.point.name);
                  updateDesc(e.point.index)
                  }
                // },200)
            }
          }
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: data
    }]
  };
  const [optionsDesc, setOptionsDesc] = useState({
    
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Records accoding to students'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        },
      }
    },
    series: [{
      name: 'Involvements',
      colorByPoint: true,
      data: desc
    }]
  })
  function updateDesc(index){
    // console.log("desc[index]",(allDesc[index]) )
    let descArray = []
    descArray.push(allDesc[index])
    console.log("desc[index]",(descArray) )

    setDesc(descArray)
    // setOptionsDesc({
    //   // title: {
    //   //   text: 'Involvements of each Student in '+ desc[index].name
    //   // },
    //   series:[{
    //     name: 'Involvements',
    //     colorByPoint: true,
    //     data:desc
    //   }]
    // })
    Highcharts.chart('chart2', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Involvements of each Student in '+ allDesc[index].name
      },
      series: descArray
    });
  }
    // [{
    //   name: 'Maths',
    //   data: [['James', 90], ['Ronald', 85], ['Peterson', 80]]
    // }]
  useEffect(() => {
    // const options = {
    //   headers: {
    //             "Content-Type": "application/json",
    //             // "Access-Control-Allow":"*"
    //             "Access":"application/json"
    //           },
    //   mode:'cors'
    // }
    // axios.get("https://localhost/selflearning/charts_backend/charts.php", options);

    // axios.get('http://localhost/selflearning/charts_backend/charts.php').then((response) => {
    //   setData(response.data);
    // });
    // console.log("res",res)
    fetch('http://localhost:8080/charts.php',{
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
            'Accept': 'application/json'
      }})
       .then((response) => response.json())
       .then((data) => {
          setData(data.subjects);
          setAllDesc(data.desc);
       })
       .catch((err) => {
          console.log(err.message);
       });
       setTimeout(function(){

       },200)
 }, []);


 
  return (
    <div className="Pie container-fluid">
      <div className='row'>
        <div className='col-md-6'>
          <PieChart highcharts={Highcharts} options={options} />
        </div>
        <div className='col-md-6'>
          {/* <PieChart id="chart2" highcharts={Highcharts} options={optionsDesc} /> */}
          <div id="chart2"></div>
        </div>
      </div>
    </div>
  );
}

export default Pie;
