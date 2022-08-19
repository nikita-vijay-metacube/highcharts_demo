import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsStock from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import PieChart from "highcharts-react-official";

function DummyGraph() {
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
  
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Test'
    },
    series: [
      {
        name:'nik2',
        data: [
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
          }, 
        ]
      },
      {
        name:'nik',
        data: data
      }
    ]
  };
  const pieOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2018'
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
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
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
      }]
    }]
  }
  useEffect(() => {
    fetch('http://localhost:8080/charts.php',{
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
            'Accept': 'application/json'
      }})
       .then((response) => response.json())
       .then((data) => {
          setData(data.subjects);
          // setAllDesc(data.desc);
       })
       .catch((err) => {
          console.log(err.message);
       });
       setTimeout(function(){

       },200)
 }, []);

  return (
    <div className="DummyGraph container">
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <HighchartsReact
          highcharts={HighchartsStock}
          constructorType={'stockChart'}
          options={options}
        />
        PIE
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default DummyGraph;
