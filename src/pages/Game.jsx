import { shape, func } from 'prop-types';
import React, { Component } from 'react';
// TODO: descomentar componente quando implementado
import { /* Header, */ Question } from '../components';
import { questionApiRequest } from '../helpers/services';
import {
  deleteKeyFromLocalStorage,
  getFromLocalStorage,
} from '../helpers/storage';
// ? import { connect } from 'react-redux';

const CODE_TOKEN_NOT_FOUND = 3;
const LOGIN_ROUTE = '/';
const TOKEN_KEY = 'token';

class Game extends Component {
  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const { history } = this.props;
    const token = getFromLocalStorage(TOKEN_KEY);
    const questionsData = await questionApiRequest(token);
    if (questionsData.response_code === CODE_TOKEN_NOT_FOUND) {
      history.push(LOGIN_ROUTE);
      deleteKeyFromLocalStorage(TOKEN_KEY);
    }
    this.setState({ ...questionsData });
  };

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Question { ...this.state } />
      </div>
    );
  }
}

Game.propTypes = { history: shape({ push: func }) }.isRequired;

// ? const mapStateToProps = (state) => ({});

// ? const mapDispatchToProps = {};

export default /* connect(mapStateToProps, mapDispatchToProps)( */ Game;
