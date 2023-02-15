import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mixAnswers from '../helpers/gameFunctions';

class Question extends Component {
  render() {
    const { questions, assertions } = this.props;
    return (
      <main>
        <section>
          <p data-testid="question-category">{questions[assertions].category}</p>
          <div data-testid="question-text">{questions[assertions].question}</div>
        </section>
        <section>
          <div>Timer HERE (as component?)</div>
        </section>
        <section>
          <div>
            {mixAnswers(questions[assertions]).map((quest, index) => (
              <section key={ index } data-testid="answer-options">
                <button
                  type="button"
                  data-testid={ questions[assertions].correct_answer === quest
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
  assertions: PropTypes.number,
  questions: PropTypes.objectOf(PropTypes.any),
}.isRequired;

const mapStateToProps = (state) => ({
  questions: state.game.results,
  assertions: state.player.assertions,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps/* , mapDispatchToProps */)(Question);
