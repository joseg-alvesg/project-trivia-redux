import { GAME_RESULT/* , RESTART_GAME */ } from '../../constants';

export const gameResult = (payload) => ({
  type: GAME_RESULT,
  payload,
});

// ? provavelmente será apenas uma função de redirect ao clicar no botão?
/* export const restartGame = (payload) => ({
  type: RESTART_GAME,
  payload,
}); */
