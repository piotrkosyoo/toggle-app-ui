import React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { searchUserProfile, updateUserName, buildSearchUser } from '../actions/searchUserAction';
import Avatar from 'material-ui/Avatar';

function mapStateToProps(state) {
  return {
      searchUserResult: state.searchUserResult,
      login: state.login,
      searchUser: state.searchUser
    }
}

function mapDispatchToProps(dispatch) {
  return {
    searchUserProfile: (data) => dispatch(searchUserProfile(data)),
    updateUserName:  (data) => dispatch(updateUserName(data))
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class SearchUser extends React.Component {

    constructor() {
        super();
        this.search = this.search.bind(this);
    }

    search() {
        const { login, searchUser, searchUserProfile} = this.props;
        searchUserProfile(buildSearchUser(login.email, login.password, searchUser.name));
    }

    render() {
        const { updateUserName, searchUser, searchUserResult } = this.props;
        if (searchUserResult.ready) {
            return (
                <div className="center">
                    <div className="center">
                        <TextField floatingLabelText="Username" value={searchUser.name}
                            onChange = {(event) => updateUserName(event.target.value)} />
                        <RaisedButton label="Search" primary={true} onClick={() => this.search()}/>
                    </div>
                    <div className="center">
                         <div className="center">
                            <h3 className="center">{searchUserResult.user.username}</h3>
                             <Avatar src={searchUserResult.user.profile_pic_url} size={200}/>
                            <p>{searchUserResult.user.public_email}</p>
                            <p>Follower count {searchUserResult.user.follower_count}</p>
                            <a href={searchUserResult.user.external_url} target='_blank'>Page</a>
                        </div>
                    </div>
                </div>
                )
        } else {
            return (
            <div className="center">
                <div className="center">
                    <TextField floatingLabelText="Username" value={searchUser.name}
                        onChange = {(event) => updateUserName(event.target.value)} />
                    <RaisedButton label="Search" primary={true} onClick={() => this.search()}/>
                </div>
                <div className="center">

                </div>
            </div>
            )
        }
    }
}

SearchUser.propTypes = {
    searchUserResult: PropTypes.object,
    login: PropTypes.object,
    searchUser: PropTypes.object,
    updateUserName: PropTypes.func,
    searchUserProfile: PropTypes.func
}

export default SearchUser;