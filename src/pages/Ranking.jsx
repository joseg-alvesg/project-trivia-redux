import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  state = {
    ranking: [],
  };

  componentDidMount() {
    this.setState({
      ranking: this.getRanking(),
    });
  }

  getRanking = () => {
    const { ranking } = this.props;
    return ranking.sort((a, b) => b.score - a.score);
  };

  render() {
    const { ranking } = this.state;
    return (
      <div>
        <Link to="/" data-testid="btn-go-home">Jogar novamente</Link>
        <ul>
          { ranking.map((item, index) => (
            <li key={ index }>
              <p data-testid={ `player-name-${index}` }>{item.name}</p>
              <p data-testid={ `player-score-${index}` }>{item.score}</p>
              <img src={ item.picture } alt={ item.name } />
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
