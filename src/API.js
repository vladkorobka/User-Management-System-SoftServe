import axios from 'axios'

const API = {
  baseHeaders: {
    headers: {
      Authorization: localStorage.getItem('token') // process.env.REACT_APP_TOKEN
    }
  },

  getDepartaments() {
    if (localStorage.getItem('token')) {
      return axios.get(`${process.env.REACT_APP_SERVER}/api/department`, API.baseHeaders)
    }
    return null
  },

  getDepartamentById(id) {
    if (localStorage.getItem('token')) {
      return axios.get(`${process.env.REACT_APP_SERVER}/api/department/${id}`, API.baseHeaders)
    }
    return null
  }
}

export default API