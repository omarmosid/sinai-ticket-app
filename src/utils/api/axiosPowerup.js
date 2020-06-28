import axios from 'axios'

export function axiosPowerup() {
  axios.defaults.baseURL = "https://sinai-ticket-app.herokuapp.com";
  if(process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = "http://localhost:4000";
  }
  else {
    axios.defaults.baseURL = "https://sinai-ticket-app.herokuapp.com";
  }

  axios.defaults.headers = {
    "x-auth-token": JSON.parse(localStorage.getItem("token")),
  }
}