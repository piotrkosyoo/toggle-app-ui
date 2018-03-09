const initState = {user: {}, isFetching: false, isError: false, ready: false};

export default function reducer(state= {...initState}, action){
  switch (action.type) {
    case "INIT_FETCH_SEARCH_USER":{
      return {...initState, isFetching: true}
    }
    case "FETCH_LOGIN_SEARCH_COMPLETED":{
      return {...initState, user: action.payload, ready: true }
    }
    case "FETCH_LOGIN_SEARCH_REJECTED":{
      return {...state, isError: true}
    }
  }
  return state;
}
