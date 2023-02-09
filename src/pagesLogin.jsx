import React, { Component } from 'react';

export default class pagesLogin extends Component {
  state = {
    email: '',
    name: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, name } = this.state;
    return (
      <div>
        <section>imagem</section>
        <section>
          <input
            type="text"
            name="email"
            id="email"
            value={ email }
            placeholder="Qual é o sei email do gravatar"
            onChange={ this.handleChange }
            data-testid="input-player-email"
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
          >
            Jogar
          </button>
        </section>
      </div>
    );
  }
}
