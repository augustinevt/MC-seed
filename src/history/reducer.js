import { LOAD_ORDER_REPORT } from './actionTypes';
import orderMock from '../../mockData/orderMock';

import {ordersToChartJS} from '../helpers/dataFunctions';

console.log(orderMock)

const ordersCJS = ordersToChartJS(orderMock.slice(0, 11), 'amazon');

const historyReducer = (state = { filters: { seller: 'amz', metric: 'margin'}, F1Chartjs: ordersCJS, orders: orderMock }, action) => {
  switch (action.type) {
    case LOAD_ORDER_REPORT:
      return { foo: 'foo'}
    default:
      return {...state}
  }
}

export default historyReducer;
