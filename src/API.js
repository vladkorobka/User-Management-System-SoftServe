import departmentsAPI from './departmentsAPI'

const API = {
  getDepartaments() {
    return departmentsAPI.getDepartaments()
  },

  getDepartamentById(id) {
    return departmentsAPI.getDepartamentById(id)
  }
}

export default API