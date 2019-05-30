import {
  SURVEYS_FETCH,
  ADD_SURVEYS,
  CREATE_SURVEY,
  SURVEY_FETCH,
  ADD_SURVEY,
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

const doFetchSurvey = surveyId => ({
  type: SURVEY_FETCH,
  surveyId
});

const doAddSurvey = survey => ({
  type: ADD_SURVEY,
  survey
});

export {
  doFetchSurveys,
  doAddSurveys,
  doCreateSurvey,
  doFetchSurvey,
  doAddSurvey,
};
