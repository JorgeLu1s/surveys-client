import { USER_LOGIN, SET_USER } from '../constants/actionTypes';

const doLogin = (email, password) => ({
  type: USER_LOGIN,
  credentials: { email, password },
});

export {
  doLogin,
};
