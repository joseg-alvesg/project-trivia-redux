import React from 'react';
import { MD5 } from 'crypto-js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    });
  };

  render() {
    const { img, name, score } = this.state;
    return (
      <div>
        <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${img}` } alt={ name } />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.saveLoginReducer.player,
});

Header.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gravatarEmail: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
