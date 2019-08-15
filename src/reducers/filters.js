const filtersReducerDefaultState = {
  decade: null,

}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DECADE_FILTER': 
      return {
        ...state,
        decade: action.decade
      }
    default:
      return state;
  }
}