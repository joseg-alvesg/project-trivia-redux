import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { addCounter, startTimer } from '../redux/actions/gameActions';
import { COUNTER_LIMIT } from '../constants';

class NextButtom extends Component {
  state = {
    redirect: false,
  };

  hanleClick = () => {
    const { dispatch, counter } = this.props;
    if (counter === COUNTER_LIMIT) {
      this.setState({
        redirect: true,
      });
    } else {
      dispatch(addCounter());
      dispatch(startTimer());
    }
  };

  render() {
    const { finalAnswer } = this.props;
    const { redirect } = this.state;
    return (
      <div>
        { redirect && <Redirect to="/feedback" /> }
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
