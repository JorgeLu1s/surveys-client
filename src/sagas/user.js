import { call, put } from 'redux-saga/effects';
import { login, setUser } from '../api/login';

function* handleUserLogin(action) {
  const result = yield call(login, action.credentials);
  if (result !== 'error') {
    yield setUser(result);
  }
}

export {
  handleUserLogin,
};
