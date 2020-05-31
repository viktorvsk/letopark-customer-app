import axios from 'axios';

export const baseURL = process.env.REACT_APP_BASE_URL;

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
    return apiService.get('/api/v1/stores');
  }

  static getOrders() {
    return apiService.get('/api/v1/orders');
  }

  static submitOrder(order) {
    return apiService.post('/api/v1/orders', { order });
  }

  static cancelOrder(id) {
    return apiService.delete(`/api/v1/orders/${id}`);
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
