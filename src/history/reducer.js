import { LOAD_ORDER_REPORT } from './actionTypes';
import orderMock from '../../mockData/orderMock';

import {ordersToHighChart, ordersToChartJS} from '../helpers/dataFunctions';

const orders = ordersToHighChart(orderMock.slice(0, 31), 'total');
const ordersCJS = ordersToChartJS(orderMock.slice(0, 11), 'amazon');

const historyReducer = (state = { F1Data: orders, F1Chartjs: ordersCJS }, action) => {
  switch (action.type) {
    case LOAD_ORDER_REPORT:
      return { foo: 'foo'}
    default:
      return {...state}
  }
}

export default historyReducer;
