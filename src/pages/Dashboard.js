import React, { Component } from 'react';
import Chart from './components/Chart';
// import Header from "../Common/Header";

class HighChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dynamicChart: ''
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:8080/test4.php', {
      method: 'GET',
      headers: {},
      mode: 'cors',
      cache: 'default',
    }).then(response => response.json())
    .then(data => { 
      this.fetchChart(data);
    } );
  }
  
  fetchChart = (data) => {
    let renderCharts = [];
    data.map((value, index) => {
      renderCharts.push(this.createChart(value, index));
    });
    this.setState({dynamicChart: renderCharts});
  }

  createChart = (data, index) => {
    return <Chart options={{ chart: { type: data.type }, title: { text: data.name }, credits: { enabled: false }, series: data,
            plotOptions: {
              column: {
                colorByPoint: true,
                pointPadding: 0.05,
                groupPadding: 0.05,
              },
              series: {
                    cursor: 'pointer',
                    point: {
                      events: {
                        click: (e) => this.pointerClick(e.point, index)
                      }
                    }
              }
            } }}/>
  }

  pointerClick = (point, index) => {
    console.log(point.custom, point.x);

    fetch('http://localhost:8080/test.php', {
      method: 'GET',
      headers: {},
      mode: 'cors',
      cache: 'default',
    }).then(response => response.json())
    .then(data => { 
      this.fetchSingleChart(data, index);
    } );
  }

  fetchSingleChart = (data, index) => {
    let renderCharts = this.state.dynamicChart;
    //data.map((value, index) => {
      renderCharts[index+1] = (this.createChart(data, index+1));
    //});
    this.setState({dynamicChart: renderCharts});
  }

  render() {
    const { dynamicChart } = this.state;

    return (<>
      {/* <Header /> */}
      <div>
        {dynamicChart}
      </div>
      </>
    )
  }
}
export default HighChart;