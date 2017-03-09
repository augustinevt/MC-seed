import React from 'react';
import { connect } from 'react-redux';
import { loadReport } from './actions';

const mapStateToProps = (state) => {
  return {
    state: state
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

  onClick() {
    console.log('clicked', this.props);
    this.props.loadReport();
  }

  render() {
    return (
      <div onClick={ this.onClick }>
        This is FeatOneContainer
      </div>
    )
  }
}

export default connect(mapStateToProps, { loadReport })(FeatOneContainer);
