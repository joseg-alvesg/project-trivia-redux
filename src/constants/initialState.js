export const PLAYER_INITIAL_STATE = {
  name: '',
  score: 0,
  assertions: 0,
  gravatarEmailHash: '',
};

export const GAME_INITIAL_STATE = {
  timeRunning: false,
  finalAnswer: false,
  timer: 30,
  counter: 0,
  token: '',
  response_code: 0,
  response_message: '',
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
};
