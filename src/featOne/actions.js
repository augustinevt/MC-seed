import mockData from '../../mockData/defaultReport.json';
import { LOAD_REPORT } from './actionTypes';

import jsonDemo from '../helpers/jsonDemo';
import dataFunctions from '../helpers/dataFunctions';

dataFunctions(jsonDemo)


export const loadReport = () => (dispatch) => {

    // console.log(mockData)
    dispatch({ type: LOAD_REPORT, payload: { reports: mockData } });

}
