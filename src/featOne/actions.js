import mockData from '../../MOCK_DATA.json';
import { LOAD_REPORT } from './actionTypes';

export const loadReport = () => (dispatch) => {
  setTimeout(function () {
    console.log(mockData)
    dispatch({ type: LOAD_REPORT, payload: { food: 'yum'} });
  }, 500);
}
