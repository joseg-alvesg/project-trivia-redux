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
      name: 'Samuel',
      score: 2,
      picture: 'https://www.gravatar.com/avatar/3d285b72cc8f77008e10e18dc7b6bf1a',
    },
    {
      name: 'Kaue',
      score: 5,
      picture: 'https://www.gravatar.com/avatar/3d285b72cc8f77008e10e18dc7b6bf1a',
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
