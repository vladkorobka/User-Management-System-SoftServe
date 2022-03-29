const API = {
  baseHeaders: {
    headers: {
      Authorization: localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)
    }
  }
}

export default API