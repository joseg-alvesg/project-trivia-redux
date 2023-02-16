import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect()(NextButtom);
