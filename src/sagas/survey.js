import { call, put } from 'redux-saga/effects';
import { fetchSurveys } from '../api/survey';
import { doAddSurveys } from '../actions/survey';

function* handleFetchSurveys(action) {
  const result = yield call(fetchSurveys);
  if (result !== 'error') {
    yield put(doAddSurveys(result));
  }
}

export {
  handleFetchSurveys
};
