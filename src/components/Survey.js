import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doCreateSurvey } from '../actions/survey';

class Survey extends Component {
  state = {
    title: '',
    description: '',
    question: '',
    question_attributes: [],
    msgAlert: ''
  };

  onChangeValue = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { title, question_attributes } = this.state;

    if (title === '' && question_attributes.length === 0) {
      this.setState({ msgAlert: 'Please add a title and at least one question' });
      return;
    }

    this.props.onCreateSurvey(this.state);
    this.props.history.push('/');
  };

  addQuestion = () => {
    this.setState(state => {
      const question_attributes = state.question_attributes.concat(state.question)

      return {
        question_attributes,
        question: '',
      };
    });
  };

  render() {
    const { question_attributes: questions, title, description, question, msgAlert } = this.state;

    return (
      <div>
        <p>{msgAlert}</p>
        <input
          type='text'
          name='title'
          value={title}
          onChange={this.onChangeValue}
          placeholder='Title of the survey'
        />
        <input
          type='text'
          name='description'
          value={description}
          onChange={this.onChangeValue}
          placeholder='Description of the survey'
        />
        <input
          type='text'
          name='question'
          value={question}
          onChange={this.onChangeValue}
          placeholder='add your question'
        />
        <button
          type='button'
          onClick={this.addQuestion}
        >
          Add Question
        </button>
        <button
          type='submit'
          onClick={this.onSubmit}
        >
          Create Survey
        </button>

        <ol>
          {(questions || []).map(question =>
            <li>{question}</li>
          )}
        </ol>
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
