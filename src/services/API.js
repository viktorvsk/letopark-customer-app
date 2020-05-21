import axios from 'axios';
// import { store } from '../../App';
// import * as ActionTypes from '../actions/actionTypes';
// import { clearAccessToken } from '../AsyncStorage';

export let baseURL = '';

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://letopark-development.herokuapp.com/api';
} else {
  baseURL = 'http://192.168.0.104:5000/api';
}

const apiService = axios.create({
  baseURL,
  headers: {},
});

apiService.defaults.headers.common.Authorization = localStorage.getItem('accessToken');

export default class API {
  static setAccessToken(token) {
    apiService.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  static clearAccessToken() {
    apiService.defaults.headers.common.Authorization = null;
  }

  static getStores() {
    return apiService.get('/v1/stores');
  }

  static getOrders() {
    return apiService.get('/v1/orders');
  }

  static submitOrder(order) {
    return apiService.post('/v1/orders', { order });
  }
}

apiService.interceptors.response.use(
  response => {
    const responseAccessToken = response.headers.access_token;
    if (responseAccessToken) {
      API.setAccessToken(responseAccessToken);
      localStorage.setItem('accessToken', responseAccessToken);
    }
    return response;
  },
  // function(error) {
  //   if (401 === error.response.status) {
  //     clearAccessToken();
  //     API.clearAccessToken();
  //     store.dispatch({ type: ActionTypes.SIGN_OUT_SUCCESS });
  //   } else {
  //     return Promise.reject(error);
  //   }
  // },
);
