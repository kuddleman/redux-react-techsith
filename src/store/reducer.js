const initialState = {
  age: 21
}

const reducer = ( state= initialState , action ) => {

  const newState = {...state }

//   if ( action.type ==='AGE_UP' ) {
//     newState.age++
//   }
//   if ( action.type === 'AGE_DOWN' ) {
//     newState.age--
//   }
//   return newState
// }

  switch (action.type) {
    case 'AGE_UP':
      newState.age++
      break
    case 'AGE_DOWN':
      newState.age--
      break
    default:
      return newState  
  }
  return newState
}  

export default reducer