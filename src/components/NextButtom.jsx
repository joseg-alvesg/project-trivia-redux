import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, startTimer, stopTimer } from '../redux/actions/gameActions';

class NextButtom extends Component {
  hanleClick = () => {
    const { dispatch } = this.props;
    dispatch(addCounter(1));
    dispatch(stopTimer());
    dispatch(startTimer());
  };

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
