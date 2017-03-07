import api from '../helpers/api';

const changeMessage = () => (dispatch) => {
  api.default.get().then(data => {
    dispatch({ type:'CHANGE_MESSAGE', message: data.body });
  })
}

export default changeMessage;
