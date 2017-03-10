import React from 'react';
import { loadOrderReport } from './actions';

import { connect } from 'react-redux';

const mapStateToProps = (state = { F1Data: [] }) => {

  console.log(state)
  return { F1data: state.F1data, }
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
