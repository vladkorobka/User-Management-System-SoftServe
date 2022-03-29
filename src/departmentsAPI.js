import axios from 'axios'
import API from './API'

const departmentsAPI = {

  getDepartaments() {
    return axios.get(`${process.env.REACT_APP_SERVER}/api/department`, API.baseHeaders)
  },

  getDepartamentById(id) {
    return axios.get(`${process.env.REACT_APP_SERVER}/api/department/${id}`, API.baseHeaders)
  }
}

export default departmentsAPI