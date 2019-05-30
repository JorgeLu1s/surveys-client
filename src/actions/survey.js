import {
  SURVEYS_FETCH,
  ADD_SURVEYS
} from '../constants/actionTypes';

const doFetchSurveys = () => ({
  type: SURVEYS_FETCH
});

const doAddSurveys = surveys => ({
  type: ADD_SURVEYS,
  surveys
});

export {
  doFetchSurveys,
  doAddSurveys
};
