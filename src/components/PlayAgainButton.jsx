import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { playAgain } from '../redux/actions/gameActions';

class PlayAgainButton extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <Link
        data-testid="btn-play-again"
        to="/"
        onClick={ () => dispatch(playAgain()) }
      >
        Jogar novamente

      </Link>
    );
  }
}

PlayAgainButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(PlayAgainButton);
