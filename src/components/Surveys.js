import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSurveys } from '../selectors/survey';
import { doFetchSurveys } from '../actions/survey';

class Surveys extends Component {

  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    const { surveys } = this.props;
    return(
      <div>
        <ul>
          {(surveys || []).map(survey =>
            <li key={survey.id}>{survey.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  surveys: getSurveys(state),
});

const mapDispatchToProps = dispatch => ({
  fetchSurveys: () => dispatch(doFetchSurveys())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Surveys);
