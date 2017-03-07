import React from 'react';
import dashActions from './dashboardActions';
import { connect } from 'react-redux';

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
  }

  render() {
    return (
      <div>
        The DashBoard container
        <div>
          { this.props.message }
        </div>
        <button onClick={ this.onClick }> click for api message </button>
      </div>
    )
  }
}

DashboardContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, { dashActions } )(DashboardContainer);
