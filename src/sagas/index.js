import { takeEvery, all } from 'redux-saga/effects';
import { USER_LOGIN, SURVEYS_FETCH, CREATE_SURVEY, SURVEY_FETCH } from '../constants/actionTypes';
import { handleUserLogin } from './user';
import { handleFetchSurveys, handleCreateSurvey, handleFetchSurvey } from './survey';

function *watchAll() {
  yield all([
    takeEvery(USER_LOGIN, handleUserLogin),
    takeEvery(SURVEYS_FETCH, handleFetchSurveys),
    takeEvery(CREATE_SURVEY, handleCreateSurvey),
    takeEvery(SURVEY_FETCH, handleFetchSurvey),
  ]);
}

export default watchAll;
