import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GRAVATAR_ENDPOINT } from '../constants';

class Header extends React.Component {
  render() {
    const { gravatarEmailHash, name, score } = this.props;
    return (
      <div>
        <img
          data-testid="header-profile-picture"
          src={ `${GRAVATAR_ENDPOINT}${gravatarEmailHash}` }
          alt={ name }
        />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score}</p>
      </div>
    );
  }
}

Header.propTypes = {
  gravatarEmail: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = ({ player: { gravatarEmailHash, name, score } }) => ({
  gravatarEmailHash,
  name,
  score,
});

export default connect(mapStateToProps)(Header);
