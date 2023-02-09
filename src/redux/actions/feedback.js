import { GAME_RESULT, RESTART_GAME } from '../../constants';

export const gameResult = (payload) => ({
  type: GAME_RESULT,
  payload,
});

export const restartGame = (payload) => ({
  type: RESTART_GAME,
  payload,
});
