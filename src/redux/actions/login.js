import { SAVE_LOGIN } from '../../constants';

const saveLogin = (payload) => ({
  type: SAVE_LOGIN,
  payload,
});

export default saveLogin;
