import { call, put } from 'redux-saga/effects';
import { login, setUser } from '../api/login';
import { doSetSession } from '../actions/user';

function* handleUserLogin(action) {
  const result = yield call(login, action.credentials);
  if (result !== 'error') {
    yield setUser(result);
    yield put(doSetSession(result.hits));
  }
  // else put action to show error
}

export {
  handleUserLogin,
};
