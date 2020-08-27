import { SET_REGISTER } from '../constant';
import axios from 'axios';
import { history } from '../../helper/hisory';

export const fetchRegister = (user) => {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: 'https://5f46979fe165a60016ba9f20.mockapi.io/api/v1/register',
      data : user,
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      const data = res.data;
      dispatch(getRegister(data));
      history.push('/login');
    });
  };
};

export const getRegister = (data) => {
  return {
    type: SET_REGISTER,
    payload: data,
  };
};
