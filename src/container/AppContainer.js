import React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Login from '../components/Login';
import ProfileContainer from './ProfileContainer';
import LinearProgress from 'material-ui/LinearProgress';

function mapStateToProps(state) {
  return {
      loggedData: state.loggedData
    }
}

@connect(mapStateToProps)
class AppContainer extends React.Component{

  render(){
    const { loggedData } = this.props;
    if (loggedData.ready) {
      return (
        <div className="center">
          <ProfileContainer/>
        </div>
      )
    } else if (loggedData.isFetching) {
      return (
        <div className="center">
            <LinearProgress/>
        </div>
      )
    } else {
      return (
        <div className="center">
          <Login/>
        </div>
      )
    }
  }
}

AppContainer.propTypes = {
    loggedData: PropTypes.object
}

export default AppContainer;