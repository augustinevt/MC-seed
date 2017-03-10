import { LOAD_ORDER_REPORT } from './actionTypes';

const getOrders = orders => ({
  type: LOAD_ORDER_REPORT,
  orders,
});

const loadOrderReport = () => (dispatch) => {
  dispatch(getOrders('foo'));
}

export { loadOrderReport };
