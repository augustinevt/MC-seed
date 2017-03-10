import React from 'react';
import { connect } from 'react-redux';

import { loadOrderReport } from './actions';
import { HighChartDefault } from '../charts';
import { ChartJSDefault } from '../charts';

const mapStateToProps = (state = { F1Data: [] }) => {
  // const data = ordersToHighChart(state.F1Data, 'total')
  const data = state.F1Data;
  console.log(data)
  return { F1Data: data }
};

const mapDispatchToProps = ({
  loadOrderReport,
})

class HistoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return(
      <div>
        { this.props.children }
        < ChartJSDefault />
      </div>
    );
  }
}

// < HighChartDefault data={ this.props.F1Data } />
export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
