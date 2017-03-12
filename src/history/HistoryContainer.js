import React from 'react';
import { connect } from 'react-redux';

import { loadOrderReport } from './actions';
// import { HighChartDefault } from '../charts';
import { ChartJSDefault } from '../charts';
// import { D3Default } from '../charts';
// import { D3Faux } from '../charts';
import { ControlDefault } from '../charts';

const mapStateToProps = (state = { F1Data: [] }) => {
  // const data = ordersToHighChart(state.F1Data, 'total')
  const data = state.F1Data;
  console.log(state)
  return { F1Data: data, F1ChartJS: state.F1Chartjs }
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
        < ChartJSDefault data={ this.props.F1ChartJS } />
        < ControlDefault />
      </div>
    );
  }
}

// < HighChartDefault data={ this.props.F1Data } />
export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
