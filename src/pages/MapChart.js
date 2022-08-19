import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataAsia from './mapDataAsia';
require('highcharts/modules/map')(Highcharts);
function MapChart() {
  const [data, setData] = useState([
    ['ae', 37],
    ['af', 44],
    ['ye', 6]
  ]);
  const options = {
    title: {
      text: ''
    },
    colorAxis: {
      min: 0,
      stops: [[0.4, '#ffff00'], [0.65, '#bfff00'], [1, '	#40ff00']]
    },
  
    series: [
      {
        mapData: mapDataAsia,
        name: 'Asia',
        data: data
      }
    ]
  };
  useEffect(() => {
    fetch('http://localhost:8080/maps.php',{
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
            'Accept': 'application/json'
      }})
       .then((response) => response.json())
       .then((data) => {
          setData(data);
          // setAllDesc(data.desc);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className="MapChart">
      <div>
        <HighchartsReact
          options={options}
          constructorType={'mapChart'}
          highcharts={Highcharts}
        />
      </div>
    </div>
  );
}

export default MapChart;
