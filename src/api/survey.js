import http from './http';

const fetchSurveys = () =>
  http.get('/surveys')
  .then(response => response.data)
  .catch(error => 'error');

const createSurvey = survey =>
  http.post('/surveys', survey)
  .then(response => response.data)
  .catch(error => 'error');

const fetchSurvey = ({ surveyId }) =>
  console.log('surveyId', surveyId) || http.get(`/surveys/${surveyId}`)
  .then(response => response.data)
  .catch(error => 'error');

export {
  fetchSurveys,
  createSurvey,
  fetchSurvey,
};
