import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

export default class PieChart extends Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: { columns: this.props.columns, type: 'pie' }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    this.chart.load({
      columns: nextProps.columns
    });
  }

  render() {
    return (
      <div className='pie-chart' ref='chart'/>
    );
  }
}
PieChart.propTypes = {
  columns: PropTypes.array
};
