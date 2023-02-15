import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { player } = this.props;
    const { score, assertions } = player;
    return (
      <div>
        <Header />
        <p>
          Você acertou
          {' '}
          <span data-testid="feedback-total-question">{assertions}</span>
          {' '}
          questões!
        </p>
        <p>
          Um total de
          {' '}
          <span data-testid="feedback-total-score">{score}</span>
          {' '}
          pontos
        </p>
      </div>
    );
  }
}

Feedback.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.string,
    assertions: PropTypes.number,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Feedback);
