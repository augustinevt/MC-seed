import React from 'react';
import dashActions from './dashboardActions';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';



import DashGrid from './components/DashGrid';

const mapStateToProps = (state) => {
  return { message: state.message }
}

const defaultProps = {
  message: 'Default Message',
};

class DashboardContainer extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('clicked!', this.props);
    this.props.dashActions();
    console.log(Highcharts)
    Highcharts.chart('container1', {
       chart: {
           type: 'bar'
       },
       title: {
           text: 'Fruit Consumption'
       },
       xAxis: {
           categories: ['Apples', 'Bananas', 'Oranges']
       },
       yAxis: {
           title: {
               text: 'Fruit eaten'
           }
       },
       series: [{
           name: 'Jane',
           data: [1, 0, 4]
       }, {
           name: 'John',
           data: [5, 7, 3]
       }]
   });
    Highcharts.chart('container2', {
       chart: {
           type: 'line'
       },
       title: {
           text: 'Fruit Consumption'
       },
       xAxis: {
           categories: ['Apples', 'Bananas', 'Oranges']
       },
       yAxis: {
           title: {
               text: 'Fruit eaten'
           }
       },
       series: [{
           name: 'Jane',
           data: [1, 0, 4]
       }, {
           name: 'John',
           data: [5, 7, 3]
       }]
   });
  }

  render() {
    return (
      <div>
        The DashBoard container
        <div>
          { this.props.message }
        </div>
        <button onClick={ this.onClick }> click for api message </button>
        <DashGrid />
      </div>
    )
  }
}

DashboardContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, { dashActions } )(DashboardContainer);
