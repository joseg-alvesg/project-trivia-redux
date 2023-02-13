import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    return (
      <div>
        <Link to="/" data-testid="btn-go-home">Jogar novamente</Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default/*  connect(mapStateToProps, mapDispatchToProps)( */Ranking/* ) */;
