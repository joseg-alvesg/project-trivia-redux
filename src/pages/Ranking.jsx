import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFromLocalStorage, saveToLocalStorage } from '../helpers/storage';
import { GRAVATAR_ENDPOINT } from '../constants';

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
    const { player } = this.props;
    const { name, score, gravatarEmailHash } = player;
    const playerObj = {
      name,
      score,
      picture: gravatarEmailHash,
    };
    const savedRanking = getFromLocalStorage('ranking')
      ? getFromLocalStorage('ranking') : [];
    const sortedRaking = [...savedRanking, playerObj].sort((a, b) => b.score - a.score);
    saveToLocalStorage('ranking', sortedRaking);
    return sortedRaking;
  };

  render() {
    const { ranking } = this.state;
    return (
      <div>
        <Link to="/" data-testid="btn-go-home">Jogar novamente</Link>
        <ul>
          { ranking.map((item, index) => (
            <li key={ index }>
              <img src={ `${GRAVATAR_ENDPOINT}${item.picture}` } alt={ item.name } />
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
  player: state.player,
});

Ranking.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    gravatarEmailHash: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Ranking);
