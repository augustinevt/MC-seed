import { LOAD_ORDER_REPORT } from './actionTypes';
import orderMock from '../../mockData/orderMock';

import {ordersToHighChart} from '../helpers/dataFunctions';

const orders = ordersToHighChart(orderMock.slice(0, 31), 'total')

const historyReducer = (state = { F1Data: orders }, action) => {
  switch (action.type) {
    case LOAD_ORDER_REPORT:
      return { foo: 'foo'}
    default:
      return {...state}
  }
}

export default historyReducer;
