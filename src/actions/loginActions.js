import axios from "axios";

export function loginUser(data){
  return function(dispatch){
    dispatch({type:'INIT_FETCH_LOGIN_USER', payload: null});
    axios.post('/toggle-app/user/login', data)
    .then((response) =>{
        dispatch({type:'FETCH_LOGIN_USER_COMPLETED', payload: response.data});
    })
    .catch((err) => {
        dispatch({type:'FETCH_LOGIN_USER_REJECTED', payload:err})
    })
  }
}

export function buildLoginData(emailData, passworddata) {
    return {
        email: emailData,
        password: passworddata
    }
}

export function updateEmail(email) {
    return { type: 'UPDATE_EMAIL', payload: email };
}

export function updatePassword(password) {
    return { type: 'UPDATE_PASSWORD', payload: password };
}