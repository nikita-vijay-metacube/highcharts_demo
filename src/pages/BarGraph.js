import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './BarGraph.css';
function BarGraph() {
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
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: data
      }
    ]
  };
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
    <div className="BarGraph">
      <div className='container'>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default BarGraph;
