import axios from 'axios';

const API = {
  SERWER: 'http://localhost:3000',
  TOKEN: '0123456789',

  getDepartaments() {
    return axios.get(`${API.SERWER}/api/department`, {
      headers: {
        Authorization: API.TOKEN
      }
    })
      .then((response) => response)
      .catch((error) => {
        let errorMessage;
        if (error.response) {
          errorMessage = '404';
        } else if (error.request) {
          errorMessage = error.request;
        } else {
          errorMessage = error.message;
        }
        return errorMessage;
      });
  },

  getDepartamentById(id) {
    return axios.get(`${API.SERWER}/api/department/${id}`, {
      headers: {
        Authorization: API.TOKEN
      }
    })
      .then((response) => response)
      .catch((error) => {
        let errorMessage;
        if (error.response) {
          errorMessage = '404';
        } else if (error.request) {
          errorMessage = error.request;
        } else {
          errorMessage = error.message;
        }
        return errorMessage;
      });
  }
};

export default API;
