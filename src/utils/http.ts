import axios from "axios";

const http = axios.create({ baseURL: "https://dummyjson.com" });

http.interceptors.request.use((httpConfig) => {
  if (httpConfig?.headers) {
    httpConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  }
  return httpConfig;
});

http.interceptors.response.use(res => res, error => {
  if (error.response) {
    const { status, data } = error.response;
    if (status === 500) {
      console.error('SERVER ERROR: ', data?.exception);
    } else if (status === 403) {
      console.error('AUTHENTICATION ERROR: ', data?.exception);
    } else {
      console.error('CLIENT ERROR: ', data?.exception);
    }
  }
  return Promise.reject(error);
});

export default http;
