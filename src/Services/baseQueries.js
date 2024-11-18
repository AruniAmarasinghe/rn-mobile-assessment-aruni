import axios from 'axios';
import {Config} from '../Config/index';

const client = axios.create({
  timeout: 10000,
});

client.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject({
      success: false,
      error,
    });
  },
);

/**
 * Transform response
 */
client.interceptors.response.use(
  response => {
    return new Promise(resolve => {
      return resolve({
        success: true,
        data: response.data,
      });
    });
  },
  error => {
    if (error.response) {
      // The request was made, and the server responded, with a status code that falls out of the range of 2xx
      const errorData = error.response.data;
      let errorStatus = error.response.status;
      let errorMessage;
      if (typeof errorData === 'string' && errorData.length > 0) {
        errorMessage = errorData;
      } else {
        if (Array.isArray(errorData)) {
          errorMessage = errorData.join('\n');
        } else if (errorData.message) {
          errorMessage = errorData.message;
        } else {
          errorMessage =
            'An error has occurred. Please check your internet connection and try again.';
        }
      }
      return Promise.resolve({
        success: false,
        status: errorStatus,
        message: errorMessage,
        error,
      });
    } else if (error.request) {
      // request was made but no response was received
      let errorMessage;
      if (error.code === 'ECONNABORTED') {
        errorMessage =
          'The request timed out. Please check your internet connection';
      } else {
        errorMessage =
          'An error has occurred. Please check your internet connection and try again.';
      }
      return Promise.resolve({
        success: false,
        status: null,
        message: errorMessage,
        error,
      });
    } else {
      // neither request nor response is present on error
      return Promise.resolve({
        success: false,
        status: null,
        message: error.message,
        error,
      });
    }
  },
);

/**
 * Set up Auth header with jwt token
 * for requests that need authorisation
 * @param token
 * @param platformKey
 * @returns {{'Content-Type': string}}
 */
function getHeaders(token) {
  const headers = {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'X-Finnhub-Token': Config.API_KEY,
  };

  if (token) {
    headers.authorization = `Bearer ${''}`;
  }
  return headers;
}

export const get = (url, params = null, authToken = null) => {
  return client.get(url, {params: params, headers: getHeaders(authToken)});
};
