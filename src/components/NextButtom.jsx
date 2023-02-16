import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCounter, startTimer } from '../redux/actions/gameActions';

class NextButtom extends Component {
  hanleClick = () => {
    const { dispatch } = this.props;
    dispatch(addCounter());
    dispatch(startTimer());
  };

  render() {
    const { finalAnswer } = this.props;
    return (
      <div>
        {
          finalAnswer
            && <button data-testid="btn-next" onClick={ this.hanleClick }>Próxima</button>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  finalAnswer: state.game.finalAnswer,
  counter: state.game.counter,
});

NextButtom.propTypes = {
  dispatch: PropTypes.func.isRequired,
  finalAnswer: PropTypes.bool.isRequired,
  counter: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(NextButtom);
