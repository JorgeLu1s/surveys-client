import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSurvey } from '../selectors/survey';
import { doFetchSurvey } from '../actions/survey';

class SurveyDetail extends Component {

  componentDidMount() {
    const { params } = this.props.match;
    this.props.fetchSurvey(params.id);
  }

  render() {
    const { survey } = this.props;

    return (
      <div>
        <h1>{survey.title}</h1>
        <p>{survey.description}</p>
        <ol>
          {(survey.questions || []).map(question =>
            <li key={question.id}>{question.body}</li>
          )}
        </ol>
        <Link to='/'>Surveys</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  survey: getSurvey(state),
});

const mapDispatchToProps = dispatch => ({
  fetchSurvey: surveyId => dispatch(doFetchSurvey(surveyId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SurveyDetail);
