import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleSort from '../helpers/gameFunctions';
import { stopTimer } from '../redux/actions/gameActions';
import Timer from './Timer';

class Question extends Component {
  hancleClick = () => {
    const { dispatch } = this.props;
    dispatch(stopTimer());
  };

  render() {
    const { questions, counter, timeRunning } = this.props;
    return (
      <main>
        <section>
          <p data-testid="question-category">{questions[counter].category}</p>
          <div data-testid="question-text">{questions[counter].question}</div>
        </section>
        <section>
          <Timer />
        </section>
        <section>
          <div>
            {handleSort(questions[counter]).map((quest, index) => (
              <section key={ index } data-testid="answer-options">
                <button
                  type="button"
                  onClick={ this.hancleClick }
                  disabled={ !timeRunning }
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
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps/* , mapDispatchToProps */)(Question);
