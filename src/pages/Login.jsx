import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './styles/Login.module.css';
import logo from '../images/logo-trivia.svg';
import { fetchSessionToken, saveLogin } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    name: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validation);
  };

  handleClick = () => {
    const { email, name } = this.state;
    const { dispatch, history } = this.props;
    dispatch(fetchSessionToken());
    dispatch(saveLogin({ email, name }));
    history.push('/game');
  };

  validation = () => {
    const { email, name } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    this.setState({ isDisabled: !regex.test(email) || name.length < 1 });
  };

  render() {
    const { email, name, isDisabled } = this.state;
    return (
      <div className={ styles.loginContainer }>
        <section className={ styles.image }>
          <img src={ logo } alt="logo" />
        </section>
        <section className={ styles.input }>
          <input
            type="text"
            name="email"
            id="email"
            value={ email }
            placeholder="Qual é o seu email do gravatar"
            onChange={ this.handleChange }
            data-testid="input-gravatar-email"
          />
          <input
            type="text"
            name="name"
            id="name"
            value={ name }
            placeholder="Qual é o seu nome?"
            onChange={ this.handleChange }
            data-testid="input-player-name"
          />
          <button
            type="button"
            data-testid="btn-play"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Play
          </button>
        </section>
        <Link
          to="/settings"
          data-testid="btn-settings"
        >
          Configurações
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Login);
