const initialState = {
  message: 'This is the default message',
};

const dashReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_MESSAGE':
      const message = action.message;
      return { message }
    default:
      return state;
  }
};

export default dashReducer;
