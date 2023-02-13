import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    const { ranking } = this.props;
    return (
      <div>
        <Link to="/" data-testid="btn-go-home">Jogar novamente</Link>
        <ul>
          { ranking.map((item, index) => (
            <li key={ index }>
              <p data-testid={ `player-name-${index}` }>{item.name}</p>
              <p data-testid={ `player-score-${index}` }>{item.score}</p>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ranking: state.triviaReducer.ranking,
});

export default connect(mapStateToProps)(Ranking);
