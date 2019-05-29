import { takeEvery, all } from 'redux-saga/effects';
import { USER_LOGIN } from '../constants/actionTypes';
import { handleUserLogin } from './user';

function *watchAll() {
  yield all([
    takeEvery(USER_LOGIN, handleUserLogin),
  ]);
}

export default watchAll;
