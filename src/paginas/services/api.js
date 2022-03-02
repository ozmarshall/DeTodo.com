import axios from "axios";
import { store } from "paginas/store/store";

export const api = axios.create({
  //baseURL: "http://localhost:3000",
  baseURL: "https://61ef3d66d593d20017dbb3ad.mockapi.io/registrados",
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    store.dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    store.dispatch({
      type: "SET_LOADING",
      payload: false,
    });
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
