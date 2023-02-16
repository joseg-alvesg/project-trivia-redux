import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestQuestions } from '../helpers/services';
import Header from '../components/Header';
import Question from '../components/Question';
import { fetchQuestionSuccess } from '../redux/actions/servicesActions';
import { deleteKeyFromLocalStorage, getFromLocalStorage } from '../helpers';
import { CODE_TOKEN_NOT_FOUND, LOGIN_ROUTE, TOKEN_KEY } from '../constants';
import NextButtom from '../components/NextButtom';

class Game extends Component {
  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const { dispatch, history } = this.props;
    const token = getFromLocalStorage(TOKEN_KEY);
    const questionsData = await requestQuestions(token);
    if (questionsData.response_code === CODE_TOKEN_NOT_FOUND) {
      history.push(LOGIN_ROUTE);
      deleteKeyFromLocalStorage(TOKEN_KEY);
      return;
    }
    dispatch(fetchQuestionSuccess({ ...questionsData }));
  };

  render() {
    return (
      <div>
        <Header />
        <Question />
        <NextButtom />
      </div>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

// ? const mapStateToProps = (state) => ({});

// ? const mapDispatchToProps = {};

export default connect(/* mapStateToProps, mapDispatchToProps */)(Game);
