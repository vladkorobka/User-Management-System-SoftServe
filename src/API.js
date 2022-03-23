import axios from 'axios'

const API = {
  baseHeaders: {
    headers: {
      Authorization: localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) // process.env.REACT_APP_TOKEN
    }
  },

  getDepartaments() {
    return axios.get(`${process.env.REACT_APP_SERVER}/api/department`, API.baseHeaders)
  },

  getDepartamentById(id) {
    return axios.get(`${process.env.REACT_APP_SERVER}/api/department/${id}`, API.baseHeaders)
  }
}

export default API