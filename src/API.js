import axios from 'axios';

const API = {
  getDepartaments() {
    return axios.get(`${process.env.REACT_APP_SERVER}/api/department`, {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN
      }
    });
  },

  getDepartamentById(id) {
    return axios.get(`${process.env.REACT_APP_SERVER}/api/department/${id}`, {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN
      }
    });
  }
};

export default API;
