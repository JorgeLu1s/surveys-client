import { ADD_SURVEYS } from '../constants/actionTypes';

const INITIAL_STATE = {};

const applyAddSurveys = (state, action) =>(
  {...state, ...{surveys: action.surveys}});

function surveyReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_SURVEYS:
      return applyAddSurveys(state, action);
    default: return state;
  }
}

export default surveyReducer;
