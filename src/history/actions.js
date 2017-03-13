import { LOAD_ORDER_REPORT, CHANGE_HISTORY_FILTER } from './actionTypes';

const getOrders = orders => ({
  type: LOAD_ORDER_REPORT,
  orders,
});

export const loadOrderReport = () => (dispatch) => {
  dispatch(getOrders('foo'));
}

export const changeHistoryFilter = value => ({
  type: CHANGE_HISTORY_FILTER,
  value
})
