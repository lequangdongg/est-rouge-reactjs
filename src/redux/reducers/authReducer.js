import { SET_LOGIN, GET_DATA } from '../constant';

const initialState = {
  auth: {
    loggedIn: false,
    user: {},
    data : []
  },
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, loggedIn: true, user: action.payload };
    case GET_DATA:
      return {...state, data : action.payload};
    default:
      return state;
  }
};

export default AuthReducer;
