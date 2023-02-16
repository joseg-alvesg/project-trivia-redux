import { INCREMENT_SCORE, SAVE_LOGIN } from '../../constants';

export const saveLogin = (payload) => ({
  type: SAVE_LOGIN,
  payload,
});

export const incrementScore = (payload) => ({
  type: INCREMENT_SCORE,
  payload,
});
