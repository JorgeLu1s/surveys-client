import http from './http';

const fetchSurveys = () =>
  http.get('/surveys')
  .then(response => response.data)
  .catch(error => 'error');

export {
  fetchSurveys
};
