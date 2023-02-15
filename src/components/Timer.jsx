import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TIMER_INTERVAL } from '../constants';
import { startTimer, stopTimer } from '../redux/actions/gameActions';

class Timer extends Component {
  state = {
    timer: 30,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(startTimer());
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    }, TIMER_INTERVAL);
  }

  componentDidUpdate() {
    const { timer } = this.state;
    const { dispatch, timeRunning } = this.props;

    if (timeRunning === false) {
      clearInterval(this.timer);
    }

    if (timer === 0) {
      dispatch(stopTimer());
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { timer } = this.state;
    return (
      <div>
        <p data-testid="timer">{timer}</p>
      </div>

    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  timeRunning: state.game.timeRunning,
});

export default connect(mapStateToProps)(Timer);
