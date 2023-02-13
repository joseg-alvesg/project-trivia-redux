import React from 'react';
import { MD5 } from 'crypto-js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MIN_FEEDBACK_SCORE } from '../constants';

class Header extends React.Component {
  state = {
    img: '',
    name: '',
    score: '',
  };

  componentDidMount() {
    this.getPlayer();
  }

  getPlayer = () => {
    const { player } = this.props;
    const { name, gravatarEmail, score } = player;
    this.setState({
      name,
      score,
      img: MD5(gravatarEmail).toString(),
      msg: score < MIN_FEEDBACK_SCORE ? 'Could be better...' : 'Well Done!',
    });
  };

  render() {
    const { img, name, score, msg } = this.state;
    const { history } = this.props;
    return (
      <header>
        <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${img}` } alt={ name } />
        {history.location.pathname === '/feedback'
        && <h1 data-testid="feedback-text">{msg}</h1>}
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.saveLoginReducer.player,
});

Header.propTypes = {
  player: PropTypes.shape({
    gravatarEmail: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.number,
  }).isRequired,
  score: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
