import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
function PerformanceGraph() {
  function drawChart(index, value, type){
    let existingElement = document.querySelector('#content')
    // let newElement = React.createElement('div', {'id':newId},'');
    // ReactDOM.render(
    //   newElement,
    //   document.getElementById('content')
    // );
    
    
      console.log('type',type)
      if(type == 'pie'){
        value.map((seriesData, key)=>{
          let arr = [seriesData]
          renderChart(type,arr,index,key);

        })
      }else{
        renderChart(type,value,index)
      }
  }
  function renderChart(type,value,index,child=''){
    let display='block'
    let newId = 'chart_'+type+'_'+index;
    if(child !== ''){
      newId+='_'+child;
      if(child>0){
        display='none'
      }
    }
    const content = document.getElementById('content');

    content && ReactDOM.render(
      ReactDOM.createPortal(
        <div id={newId} style={{'display':display}}></div>, 
        content),
      document.createElement('div')
    );

    console.log('createRoot',value)
    Highcharts.chart(newId, {
      chart: {
        type: type
      },
      title: {
        text: 'Involvements of each Student in '
      },
      series: value
    });
  }
  useEffect(() => {
    fetch('http://localhost:8080/series.php',{
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
            'Accept': 'application/json'
      }})
       .then((response) => response.json())
       .then((data) => {
          data['series'].map((value,index)=>{
            console.log('series',value)
            drawChart(index,value,data['type'][index]);
          });
       })
       .catch((err) => {
          console.log(err.message);
       });
       setTimeout(function(){

       },200)
 }, []);

  return (
    <div className="PerformanceGraph" id="content">
      {/* <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div> */}
    </div>
  );
}

export default PerformanceGraph;
