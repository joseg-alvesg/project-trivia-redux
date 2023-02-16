import React, { Component } from 'react';

class NextButtom extends Component {
  render() {
    return (
      <button
        type="buttom"
        data-testid="btn-next"
        onClick={ this.hanleClick }
      >
        Próxima
      </button>
    );
  }
}

export default NextButtom;
