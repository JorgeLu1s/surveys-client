import { ADD_SURVEYS, ADD_SURVEY } from '../constants/actionTypes';

const INITIAL_STATE = {
  surveys: [],
  survey: {}
};

const applyAddSurveys = (state, action) =>(
  {...state, ...{surveys: action.surveys}}
);

const applyAddSurvey = (state, action) =>(
  {...state, ...{survey: action.survey}}
);

function surveyReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_SURVEYS:
      return applyAddSurveys(state, action);
    case ADD_SURVEY:
      return applyAddSurvey(state, action);
    default: return state;
  }
}

export default surveyReducer;
