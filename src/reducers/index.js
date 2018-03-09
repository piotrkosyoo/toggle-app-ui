import {combineReducers} from "redux";

import loginReducer from './loginReducer';
import loginFetchReducer from './loginFetchReducer';
import searchUserFetchReducer from './searchUserFetchReducer';
import searchUserReducer from './searchUserReducer';

export default combineReducers({
  login: loginReducer,
  loggedData: loginFetchReducer,
  searchUser: searchUserReducer,
  searchUserResult: searchUserFetchReducer
})