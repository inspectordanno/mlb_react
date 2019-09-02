const reducerDefaultState = {
  decade: null,
  data: null,
  activePlayer: null
}

export default (state = reducerDefaultState, action) => {
  switch (action.type) {
    case 'READ_DATA':
      return {
        ...state,
        data: action.data
      }
    case 'SET_DECADE_FILTER': 
      return {
        ...state,
        decade: action.decade
      };
    case 'SET_ACTIVE_PLAYER':
      return {
        ...state,
        activePlayer: action.activePlayer
      }
    default:
      return state;
  }
}