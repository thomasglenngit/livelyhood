import * as c from './ActionTypes'

export const editForm = (id) => ({
  type: c.UPDATE_DISPLAY,
  display: c.EDIT_FORM,
  selectedNeighbor: id
});

export const newFormDisplay = () => ({
  type: c.UPDATE_DISPLAY,
  display: c.NEW_FORM,
  selectedNeighbor: null
});

export const neighborDetails = (id) => ({
  type: c.UPDATE_DISPLAY,
  display: c.NEIGHBOR_DETAILS,
  selectedNeighbor: id
});

export const homeList = () => ({
  type: c.UPDATE_DISPLAY,
  display: c.NEIGHBOR_LIST,
  selectedNeighbor: null
});

export const deleteNeighbor = (id) => ({
  type: c.UPDATE_DISPLAY,
  display: c.DELETE_NEIGHBOR,
  selectedNeighbor: id
});

// export const locateNeighbor = (id) => {
  
  
// }