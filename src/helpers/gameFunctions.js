import { SORT_FACTOR } from '../constants';

const mixAnswers = (questions) => {
  const mixedAnswers = [];
  [questions].forEach((question) => {
    mixedAnswers.push({ index: 0, answer: question.correct_answer });
    question.incorrect_answers.forEach((incorrectAnswer, index) => {
      mixedAnswers.push({ index: index + 1, answer: incorrectAnswer });
    });
    mixedAnswers.sort(() => Math.random() - SORT_FACTOR);
  });
  console.log(mixedAnswers);
  return mixedAnswers;
};

export default mixAnswers;
