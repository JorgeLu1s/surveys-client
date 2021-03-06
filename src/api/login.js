import axios from 'axios';

const login = ({ email, password }) =>
  axios.post(`${process.env.REACT_APP_BASE_URL}/user_token`, { auth: { email, password } })
  .then(response => response.data)
  .catch(error => 'error');

const setUser = ({ jwt }) =>
  localStorage.setItem('surveys_jwt', jwt);

export {
  login,
  setUser
};
