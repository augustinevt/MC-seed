import React from 'react';
import { connect } from 'react-redux';
import { loadReport } from './actions';

import { Report } from '../components';
// import { HighChartDefault } from '../charts';

const mapStateToProps = (state = {reports: []}) => {
  return {
    reports: state.reports
  }
}

class FeatOneContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.log('foo')
  }

  componentDidUpdate() {
    console.log('updated', this.props)
  }

  testSize() {
    for (let i = 0; i < 5500; i++) {
      console.log('hello')
    }
  }

  onClick() {
    // console.log('clicked', );
    this.testSize();
    // this.props.loadReport();
  }

  render() {

    return (
      <div onClick={ this.onClick }>
        This is FeatOneContainer
        < Report reports={ this.props.reports } />
      </div>
    )
  }
}

export default connect(mapStateToProps, { loadReport })(FeatOneContainer);
