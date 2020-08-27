import { SET_REGISTER } from '../constant';

const initialState = {
};

const registerReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER:
      return {...state, user : action.payload}
    default:
      return state;
  }
};

export default registerReducers;
