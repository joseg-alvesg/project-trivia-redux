import { SORT_FACTOR } from '../constants';

const handleSort = (questions) => {
  const answers = [];
  [questions].forEach((question) => {
    answers.push({ index: 0, answer: question.correct_answer });
    question.incorrect_answers.forEach((incorrectAnswer, index) => {
      answers.push({ index: index + 1, answer: incorrectAnswer });
    });
    answers.sort(() => Math.random() - SORT_FACTOR);
  });
  return answers;
};

// TODO: export const handleNextBtn = () => {};
// TODO: export const handleQuestionResult = () => {};
// TODO: export const handleScore = () => {};
// TODO: export const handleTimer = () => {};

export default handleSort;
