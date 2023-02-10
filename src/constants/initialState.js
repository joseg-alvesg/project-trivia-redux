const INITIAL_STATE = {
  token: '', // * session token da Trivia API
  player: {
    name: '',
    gravatarEmail: '',
    score: 0,
    assertions: 0,
  },
  ranking: [
    {
      name: '', // * nome_da_pessoa
      score: 0,
      picture: '', // * url_da_foto_no_gravatar
    },
  ],
};

export default INITIAL_STATE;
