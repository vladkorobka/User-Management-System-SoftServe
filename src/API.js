import axios from 'axios';
import env from 'react-dotenv';

const API = {
  SERVER: env.SERVER,
  TOKEN: env.TOKEN,

  getDepartaments() {
    return axios.get(`${API.SERVER}/api/department`, {
      headers: {
        Authorization: API.TOKEN
      }
    })
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
    return axios.get(`${API.SERVER}/api/department/${id}`, {
      headers: {
        Authorization: API.TOKEN
      }
    })
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
