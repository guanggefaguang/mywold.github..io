import axios from 'axios';
import qs from 'qs';
import api from './url'

axios.defaults.timeout = 30 * 1000
axios.defaults.baseURL = api.HOST           //baseURL可以是追加的字段

// axios.defaults.headers = {
  // 'X-Requested-With': 'XMLHttpRequest',
  // 'Content-Type': 'application/x-www-form-urlencoded'
// }

axios.interceptors.request.use(
  config => {

    if (config.method == 'post') {
      config.data = qs.stringify(config.data.params)
    }
    return config
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    switch (error.response.status) {
      case 404:
        error.message = '请求地址出错'
        break;
    }
    return Promise.reject(error.response)
  }
)

export default {
  http(methods, url, params) {
    return new Promise((resolve, reject) => {
      axios[methods.toLowerCase()](url, {params}
      ).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
