import React from 'react';
import { MD5 } from 'crypto-js';
import { connect } from 'react-redux';

class Header extends React.Component {
  state = {
    img: '',
    name: '',
    score: '',
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

export default connect(mapStateToProps)(Header);
