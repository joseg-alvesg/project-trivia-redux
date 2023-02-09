const INITIAL_STATE = {
  token: '',
  player: {
    name: '',
    gravatarEmail: '',
  },
};

const saveLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      ...payload,
    };
  default:
    return state;
  }
};

export default saveLoginReducer;
