import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlayAgainButton extends Component {
  render() {
    return (
      <Link data-testid="btn-play-again" to="/">Jogar novamente</Link>
    );
  }
}

export default PlayAgainButton;
