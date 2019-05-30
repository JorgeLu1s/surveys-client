import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doCreateSurvey } from '../actions/survey';

class Survey extends Component {
  state = {
    title: '',
    description: '',
    question: '',
    questions_attributes: [],
    msgAlert: ''
  };

  onChangeValue = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { title, questions_attributes } = this.state;

    if (title === '' || questions_attributes.length === 0) {
      this.setState({ msgAlert: 'Please add a title and at least one question' });
      return;
    }

    this.props.onCreateSurvey(this.state);
    this.props.history.push('/');
  };

  addQuestion = () => {
    if (this.state.question !== '') {
      this.setState(state => {
        const questions_attributes = [...state.questions_attributes, { body: state.question }]

        return {
          questions_attributes,
          question: '',
        };
      });
    }
  };

  render() {
    const { questions_attributes: questions, title, description, question, msgAlert } = this.state;

    return (
      <div>
        <div className=''>
          <div className=''>
          {msgAlert ? <p className='alert alert-warning'>{msgAlert}</p> : ''}
          <div className='form-group'>
            <label>Title</label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={this.onChangeValue}
              placeholder='Title of the survey'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <input
              type='text'
              name='description'
              value={description}
              onChange={this.onChangeValue}
              placeholder='Description of the survey'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>New Question</label>
            <input
              type='text'
              name='question'
              value={question}
              onChange={this.onChangeValue}
              placeholder='add your question'
              className='form-control'
            />
          </div>
          <button type='button' onClick={this.addQuestion} className='btn btn-primary'>Add Question</button>
          <button type='submit' onClick={this.onSubmit} className='btn btn-primary'>Create Survey</button>
          <Link to='/'>Surveys</Link>
        </div>
      </div>
        <div className='row'>
          <ol>
            {(questions || []).map(question =>
              <li key={Math.random()}>{question.body}</li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateSurvey: survey => dispatch(doCreateSurvey(survey))
});

export default connect(
  null,
  mapDispatchToProps
)(Survey);
