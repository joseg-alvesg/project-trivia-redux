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

// TODO: export const handleNextBtn = () => {};
// TODO: export const handleQuestionResult = () => {};
// TODO: export const handleScore = () => {};
// TODO: export const handleTimer = () => {};

export default handleAnswerMix;
