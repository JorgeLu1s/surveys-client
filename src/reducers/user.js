const INITIAL_STATE = {};

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_SESSION':
      return {...state, ...{hasSession: true}}
    default: return state;
  }
}

export default userReducer;
