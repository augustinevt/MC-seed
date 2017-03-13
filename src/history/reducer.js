import { LOAD_ORDER_REPORT, CHANGE_HISTORY_FILTER } from './actionTypes';
import orderMock from '../../mockData/orderMock';

import {ordersToChartJS} from '../helpers/dataFunctions';

console.log(orderMock)

const ordersCJS = ordersToChartJS(orderMock.slice(0, 11), 'amazon');

const historyReducer = (state = { filters: 10, F1Chartjs: ordersCJS, orders: orderMock }, action) => {
  switch (action.type) {
    case LOAD_ORDER_REPORT:
      return { orders: orderMock, filters: action.value }
    case CHANGE_HISTORY_FILTER:
      return { orders: orderMock, filters: action.value }
    default:
      return {...state}
  }
}

export default historyReducer;
