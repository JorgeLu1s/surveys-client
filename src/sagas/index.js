import { takeEvery, all } from 'redux-saga/effects';
import { USER_LOGIN, SURVEYS_FETCH } from '../constants/actionTypes';
import { handleUserLogin } from './user';
import { handleFetchSurveys } from './survey';

function *watchAll() {
  yield all([
    takeEvery(USER_LOGIN, handleUserLogin),
    takeEvery(SURVEYS_FETCH, handleFetchSurveys),
  ]);
}

export default watchAll;
