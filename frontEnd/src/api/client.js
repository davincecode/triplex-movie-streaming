var axios = require("axios")

var axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  /* other custom settings */
})

module.exports = axiosInstance
