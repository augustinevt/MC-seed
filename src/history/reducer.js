import { LOAD_ORDER_REPORT } from './actionTypes';

const historyReducer = (state = { orders: [] }, action ) => {
  switch (action.type) {
    case LOAD_ORDER_REPORT:
      const state = action.orders;
      return state;
    default:
      return state;
  }
}

export default historyReducer;
