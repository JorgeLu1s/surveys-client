import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSurveys } from '../selectors/survey';
import { doFetchSurveys } from '../actions/survey';

class Surveys extends Component {

  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    const { surveys } = this.props;
    return(
      <table class='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(surveys || []).map(survey =>
          <tr key={survey.id}>
            <td>{survey.title}</td>
            <td>{survey.description}</td>
            <td>
              <Link type='button' to={`/survey/${survey.id}`} className='btn btn-primary btn-sm'>Show</Link>
              <button type='button' className='btn btn-danger btn-sm'>Delete</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
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
