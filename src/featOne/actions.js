// import mockData from '../../mockData.json';
import { LOAD_REPORT } from './actionTypes';

export const loadReport = () => (dispatch) => {
  setTimeout(function () {
    dispatch({ type: LOAD_REPORT, payload: { food: 'yum'} });
  }, 5000);
}
