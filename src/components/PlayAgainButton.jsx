import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { playAgain } from '../redux/actions/gameActions';

class PlayAgainButton extends Component {
  render() {
    const { dispatch, dataTestId } = this.props;
    return (
      <Link
        data-testid={ dataTestId }
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
  dataTestId: PropTypes.string.isRequired,
};

export default connect()(PlayAgainButton);
