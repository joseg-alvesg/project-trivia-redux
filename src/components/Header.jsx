import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GRAVATAR_ENDPOINT } from '../constants';

class Header extends React.Component {
  render() {
    const { gravatarEmail, name, score } = this.props;
    return (
      <div>
        <img
          data-testid="header-profile-picture"
          src={ `${GRAVATAR_ENDPOINT}${gravatarEmail}` }
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

const mapStateToProps = ({ player: { gravatarEmail, name, score } }) => ({
  gravatarEmail,
  name,
  score,
});

export default connect(mapStateToProps)(Header);
