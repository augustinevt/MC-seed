import { LOAD_ORDER_REPORT } from './actionTypes';

import orderMock from '../../mockData/orderMock';

const historyReducer = (state = { orders: orderMock }, action) => {
  switch (action.type) {
    case LOAD_ORDER_REPORT:
      return { foo: 'foo'}
    default:
      return {...state}
  }
}

export default historyReducer;
