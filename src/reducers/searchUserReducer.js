export default function reducer(state= {name: ''}, action){
  switch (action.type) {
    case "UPDATE_USERNAME":{
      return {...state, name: action.payload }
    }
  }
  return state;
}
