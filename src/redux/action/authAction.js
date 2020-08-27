import { SET_LOGIN, GET_DATA } from '../constant';
import axios from 'axios';
import { history } from '../../helper/hisory';

export const fetchUser = (user) => {
  return (dispach) => {
    return axios({
      method: 'post',
      url:
        'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/login',
      data: user,
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.data) {
        localStorage.setItem('token', res.data.token);
        dispach(getUser(res.data.token));
        history.push('/');
      }
      return res;
    });
  };
};

export const fetchData = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return (dispatch) => {
      return axios({
        method: 'get',
        url:
          'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/users',
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }).then((res) => {
        dispatch(getData(res.data));
      });
    };
  }
};

export const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

export const getUser = (user) => {
  return {
    type: SET_LOGIN,
    payload: user,
  };
};
