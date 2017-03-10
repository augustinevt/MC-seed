import { LOAD_REPORT } from './actionTypes';

const featOneReducer = (state = { reports: [] }, action ) => {
  switch (action.type) {
    case LOAD_REPORT:
      const state = action.payload;
      return state;
    default:
      return state;
  }
}

export default featOneReducer;
