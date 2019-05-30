import { takeEvery, all } from 'redux-saga/effects';
import { USER_LOGIN, SURVEYS_FETCH, CREATE_SURVEY } from '../constants/actionTypes';
import { handleUserLogin } from './user';
import { handleFetchSurveys, handleCreateSurvey } from './survey';

function *watchAll() {
  yield all([
    takeEvery(USER_LOGIN, handleUserLogin),
    takeEvery(SURVEYS_FETCH, handleFetchSurveys),
    takeEvery(CREATE_SURVEY, handleCreateSurvey),
  ]);
}

export default watchAll;
