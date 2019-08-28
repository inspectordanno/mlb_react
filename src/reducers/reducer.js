const reducerDefaultState = {
  decade: null,
  data: null,

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
    default:
      return state;
  }
}