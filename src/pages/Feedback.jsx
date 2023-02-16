import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PlayAgainButton from '../components/PlayAgainButton';

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
        <PlayAgainButton />
        <Link to="/ranking" data-testid="btn-ranking">Ver ranking</Link>
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
