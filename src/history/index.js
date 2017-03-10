import reducer from './reducer';
import actions from './actions';
import actionTypes from './actionTypes';
import HistoryContainer from './HistoryContainer'

import HistoryNav from './components/HistoryNav';

const historyComponents = {
  HistoryNav,
}

export {
  reducer,
  actions,
  actionTypes,
  HistoryContainer,
  historyComponents,
}

export default reducer;
