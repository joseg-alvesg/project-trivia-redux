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
        <img src={ img } alt={ name } />
        <p>{name}</p>
        <p>{score}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
});

Header.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gravatarEmail: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
