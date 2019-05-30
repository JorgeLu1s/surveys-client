import {
  SURVEYS_FETCH,
  ADD_SURVEYS,
  CREATE_SURVEY
} from '../constants/actionTypes';

const doFetchSurveys = () => ({
  type: SURVEYS_FETCH
});

const doAddSurveys = surveys => ({
  type: ADD_SURVEYS,
  surveys
});

const doCreateSurvey = survey => ({
  type: CREATE_SURVEY,
  survey
});

export {
  doFetchSurveys,
  doAddSurveys,
  doCreateSurvey,
};
