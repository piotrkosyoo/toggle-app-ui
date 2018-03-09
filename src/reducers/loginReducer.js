export default function reducer(state= {email: '' , password: ''}, action){
  switch (action.type) {
    case "UPDATE_EMAIL":{
      return {...state, email: action.payload }
    }
    case "UPDATE_PASSWORD":{
      return {...state, password: action.payload }
    }
  }
  return state;
}
