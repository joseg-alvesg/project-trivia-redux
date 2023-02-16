import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleSort from '../helpers/gameFunctions';
import { stopTimer } from '../redux/actions/gameActions';
import Timer from './Timer';
import styles from './styles/Questions.module.css';
import { incrementAssertions, incrementScore } from '../redux/actions/loginActions';
import { DIFICULTY_POINTS, SCORE_SUM_VALUE } from '../constants';

class Question extends Component {
  hancleClick = ({ target: { innerHTML } }) => {
    const { dispatch } = this.props;
    dispatch(stopTimer());
    this.askAnswer(innerHTML);
  };

  askAnswer = (value) => {
    const { questions, counter, dispatch, timer } = this.props;
    const { correct_answer: correctAnswer } = questions[counter];
    let score = 0;
    if (correctAnswer === value) {
      const dificulty = questions[counter].difficulty;
      score += SCORE_SUM_VALUE + (DIFICULTY_POINTS[dificulty] * timer);
      dispatch(incrementScore(score));
    }
  };

  render() {
    const { questions, counter, timeRunning, finalAnswer } = this.props;
    return (
      <main>
        <section>
          <p data-testid="question-category">{questions[counter].category}</p>
          <div data-testid="question-text">{questions[counter].question}</div>
        </section>
        <section>
          { !finalAnswer && <Timer onclick={ this.hancleClick } /> }
        </section>
        <section>
          <div>
            {handleSort(questions[counter]).map((quest, index) => (
              <section key={ index } data-testid="answer-options">
                <button
                  type="button"
                  onClick={ this.hancleClick }
                  disabled={ !timeRunning }
                  className={ (finalAnswer && (questions[counter]
                    .correct_answer === quest.answer ? styles
                      .correct_answer : styles.wrong_answer)) || 'desabilitado' }
                  data-testid={ questions[counter].correct_answer === quest
                    .answer ? 'correct-answer' : `wrong-answer${index}` }
                >
                  {quest.answer}
                </button>
              </section>
            ))}
          </div>
        </section>
      </main>
    );
  }
}

Question.propTypes = {
  counter: PropTypes.number,
  questions: PropTypes.objectOf(PropTypes.any),
}.isRequired;

const mapStateToProps = (state) => ({
  questions: state.game.results,
  counter: state.game.counter,
  timer: state.game.timer,
  timeRunning: state.game.timeRunning,
  finalAnswer: state.game.finalAnswer,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps/* , mapDispatchToProps */)(Question);
