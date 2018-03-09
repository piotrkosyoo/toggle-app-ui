import React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar';

function mapStateToProps(state) {
  return {
      loggedData: state.loggedData
    }
}

@connect(mapStateToProps)
class Profile extends React.Component {
    render() {
        const { loggedData } = this.props;
        return (
            <div className="center">
                <h3 className="center">{loggedData.loggedUser.username}</h3>
                <Avatar src={loggedData.loggedUser.profile_pic_url} size={200}/>
            </div>
        )
    }
}

Profile.propTypes = {
    loggedData: PropTypes.object
}

export default Profile;