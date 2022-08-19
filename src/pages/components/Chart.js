import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div width="200" style={{float:'left', width: '50%'}}>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.props.options}
        />
      </div>
    );
  }
}

export default Chart;
