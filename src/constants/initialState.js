const INITIAL_STATE = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
  ranking: [
    {
      name: '',
      score: 0,
      picture: '',
    },
  ],
  response_code: 0,
  response_message: '',
  token: '',
  results: [
    {
      category: '',
      type: '',
      difficulty: '',
      question: '',
      correct_answer: '',
      incorrect_answers: [''],
    },
  ],
  isLoading: false,
};

export default INITIAL_STATE;
