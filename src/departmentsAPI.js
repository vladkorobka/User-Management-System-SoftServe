import axios from 'axios'

const departmentsAPI = {
  baseHeaders: {
    headers: {
      Authorization: localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)
    }
  },

  getDepartaments() {
    return axios.get(`${process.env.REACT_APP_SERVER}/api/department`, departmentsAPI.baseHeaders)
  },

  getDepartamentById(id) {
    return axios.get(`${process.env.REACT_APP_SERVER}/api/department/${id}`, departmentsAPI.baseHeaders)
  }
}

export default departmentsAPI