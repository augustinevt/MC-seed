import React from 'react';
import { connect } from 'react-redux';

import { loadOrderReport, changeHistoryFilter } from './actions';
// import { HighChartDefault } from '../charts';
import { ChartJSDefault } from '../charts';
// import { D3Default } from '../charts';
// import { D3Faux } from '../charts';
import { ControlDefault } from '../charts';

import { getHistoricalOrders } from './selectors';


const mapStateToProps = ( state ) => {
  console.log('hello from MPTP', state, state.filters, [], state.orders)
  return { F1ChartJS: state.F1Chartjs, historical: getHistoricalOrders(state)}
};

const mapDispatchToProps = ({
  loadOrderReport,
  changeHistoryFilter,
})

class HistoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate() {
    console.log('UPDATED')
  }

  onChange(value) {
    console.log('ACTION TIME!!', value)
    this.props.changeHistoryFilter(value)
  }


  render() {
    console.log('Hello from HC:render! this is getHistoricalOrders!', this.props.historical)
    return(
      <div>
        { this.props.children }
        < ChartJSDefault data={ this.props.historical } />
        < ControlDefault onChange={ this.onChange } />
      </div>
    );
  }
}

// < HighChartDefault data={ this.props.F1Data } />
export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
