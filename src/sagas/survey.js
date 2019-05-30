import { call, put } from 'redux-saga/effects';
import { fetchSurveys, createSurvey, fetchSurvey } from '../api/survey';
import { doAddSurveys, doCreateSurvey, doAddSurvey } from '../actions/survey';

function* handleFetchSurveys(action) {
  const result = yield call(fetchSurveys);
  if (result !== 'error') {
    yield put(doAddSurveys(result));
  }
}

function* handleCreateSurvey(action) {
  const result = yield call(createSurvey, action);
  if (result !== 'error') {
    yield console.log('saga::survey::result', result);
  }
}

function* handleFetchSurvey(action) {
  const result = yield call(fetchSurvey, action);
  if (result !== 'error') {
    yield put(doAddSurvey(result));
  }
}

export {
  handleFetchSurveys,
  handleCreateSurvey,
  handleFetchSurvey,
};
