import * as c from './../actions/ActionTypes';

export default (state = {display: c.NEIGHBOR_LIST, selectedNeighbor: null}, action) => {
  switch (action.type) {
    case c.UPDATE_DISPLAY: // case "EDIT_FORM"
      const { display, selectedNeighbor } = action;
      const newState = { ...state, display:display, selectedNeighbor:selectedNeighbor}; 
      return newState;
    default: 
      return state;
  }
};