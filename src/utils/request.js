
 
import axios from 'axios';

/**
 *  config: axios设置信息， 如header
 */
// axios.defaults.withCredentials = true;
const fetch = options => {

  const { method = 'get', data, url, config } = options;
  const axiosOption = { timeout: 10000, ...config };

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, axiosOption);
    case 'delete':
      return axios.delete(url, axiosOption);
    case 'put':
      return axios.put(url, data, axiosOption);
    case 'post':
      return axios.post(url, data, axiosOption);
    default:
      return axios(options);
  }
};

export default function request(options) {

  return fetch(options).then(response => {

    const { statusText, status, data } = response;

    if (data === 'page missing') {
      return Promise.reject({
        success: false,
        message: data,
        statusCode: 404
      });
    }

    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      data,
    });

  }).catch(error => {

    const { response } = error;
    let message, statusCode;

    if (response && response instanceof Object) {
      const { data, statusText, status } = response;
      statusCode = status;
      message = data.message || statusText;
    } else {
      statusCode = 600;
      message = error.message || 'Network Error';
    }

    return Promise.reject({
      success: false,
      statusCode,
      message
    });

  });

}