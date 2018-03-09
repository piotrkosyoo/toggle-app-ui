const initState = {loggedUser: {}, isFetching: false, isError: false, ready: false};

export default function reducer(state= {...initState}, action){
  switch (action.type) {
    case "INIT_FETCH_LOGIN_USER":{
      return {...initState, isFetching: true}
    }
    case "FETCH_LOGIN_USER_COMPLETED":{
      return {...initState, loggedUser: action.payload, ready: true }
    }
    case "FETCH_LOGIN_USER_REJECTED":{
      return {...state, isError: true}
    }
  }
  return state;
}
