import { call, put } from 'redux-saga/effects';
import { fetchSurveys, createSurvey } from '../api/survey';
import { doAddSurveys, doCreateSurvey } from '../actions/survey';

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

export {
  handleFetchSurveys,
  handleCreateSurvey,
};
