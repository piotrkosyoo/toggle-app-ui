import axios from "axios";

export function searchUserProfile(data){
  return function(dispatch){
    dispatch({type:'INIT_FETCH_SEARCH_USER', payload: null});
    axios.post('/toggle-app/instagram/searchuser', data)
    .then((response) =>{
        dispatch({type:'FETCH_LOGIN_SEARCH_COMPLETED', payload: response.data});
    })
    .catch((err) => {
        dispatch({type:'FETCH_LOGIN_SEARCH_REJECTED', payload:err})
    })
  }
}

export function buildSearchUser(email, password, user) {
    let loginData = new LoginData(email, password);
    let searchUser = new SearchUser(user, loginData);
    return searchUser;
}

export function updateUserName(username) {
    return { type: 'UPDATE_USERNAME', payload: username };
}

class SearchUser {
    constructor(user, loginData) {
        this.user = user;
        this.loginData = loginData;
    }
}

class LoginData {
    constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}