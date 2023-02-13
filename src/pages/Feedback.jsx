import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

Feedback.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.string,
  }),
}.isRequired;

export default connect()(Feedback);
