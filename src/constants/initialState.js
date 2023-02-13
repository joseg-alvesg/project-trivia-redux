const INITIAL_STATE = {
  isLoading: false,
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
  ], // comente aqui
  response_code: 0, // Trivia API
  response_message: '', // Trivia API
  token: '', // Trivia API
  results: [
    {
      category: '',
      type: '',
      difficulty: '',
      question: '',
      correct_answer: '',
      incorrect_answers: [''],
    },
  ], // Trivia API
};

export default INITIAL_STATE;
