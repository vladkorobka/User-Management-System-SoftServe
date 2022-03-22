import axios from 'axios'

const API = {
  baseHeaders: {
    headers: {
      Authorization: localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) // process.env.REACT_APP_TOKEN
    }
  },

  getDepartaments() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)) {
      return axios.get(`${process.env.REACT_APP_SERVER}/api/department`, API.baseHeaders)
    }
    return null
  },

  getDepartamentById(id) {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)) {
      return axios.get(`${process.env.REACT_APP_SERVER}/api/department/${id}`, API.baseHeaders)
    }
    return null
  }
}

export default API