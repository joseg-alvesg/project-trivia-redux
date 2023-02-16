import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, resetTimer, startTimer } from '../redux/actions/gameActions';

class NextButtom extends Component {
  hanleClick = () => {
    const { dispatch } = this.props;
    dispatch(addCounter(1));
  };

  render() {
    const { finalAnswer } = this.props;
    return (
      <div>
        {
          finalAnswer
          && <button
            type="buttom"
            data-testid="btn-next"
            onClick={ this.hanleClick }
          >
            Próxima
          </button>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  finalAnswer: state.game.finalAnswer,
});

export default connect(mapStateToProps)(NextButtom);
