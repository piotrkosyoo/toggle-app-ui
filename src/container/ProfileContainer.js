import React from "react";
import Profile from '../components/Profile';
import SearchUser from '../components/SearchUser';

class ProfileContainer extends React.Component{
  render(){
    return (
      <div>
        <Profile/>
        <SearchUser/>
      </div>
    )
  }
}


export default ProfileContainer;