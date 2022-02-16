import axios from 'axios';
import env from 'react-dotenv';

const API = {
  getDepartaments() {
    return axios.get(`${env.SERVER}/api/department`, {
      headers: {
        Authorization: env.TOKEN
      }
    })
      .catch((error) => {
        // const { response: { status }, response: { statusText } } = error;
        // console.log(status);
        // console.log(statusText);
        let errorMessage;
        if (error.status) {
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
    return axios.get(`${env.SERVER}/api/department/${id}`, {
      headers: {
        Authorization: env.TOKEN
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
