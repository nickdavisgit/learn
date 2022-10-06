import axios from 'axios'
import qs from 'qs';
const instance = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers:{'Content-Type':'application/x-www-form-urlencoded'},
  transformRequest: function (data, headers) {
    return qs.stringify(data);
  },
  transformResponse: function (data) {
    return JSON.parse(data);
  },
});

export default instance;