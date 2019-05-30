import { combineReducers } from 'redux';
import userReducer from './user';
import surveyReducer from './survey';

const rootReducer = combineReducers({
  userState: userReducer,
  surveyState: surveyReducer,
});

export default rootReducer;
