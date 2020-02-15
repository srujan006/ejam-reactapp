
function cityDetails(state = {}, action) {
  switch (action.type) {
    case 'SINGLE_CITY': {
      // console.log('single city reducer ', action);

      if (action.body) return action.body;
      else return state;
    }
    default:
      return state;
  }
}

export { cityDetails };
