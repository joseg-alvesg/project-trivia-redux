import {
  ADD_COUNTER,
  ADD_POINT,
  END_GAME,
  FETCH_QUESTION_ERROR,
  FETCH_QUESTION_LOADING,
  FETCH_QUESTION_SUCCESS,
  NEXT_QUESTION,
  QUESTION_RESULT,
  SELECT_ANSWER,
  START_TIMER,
  STOP_TIMER,
} from '../../constants';

export const addCounter = (payload) => ({
  type: ADD_COUNTER,
  payload,
});

export const addPoint = (payload) => ({
  type: ADD_POINT,
  payload,
});

export const endGame = (payload) => ({
  type: END_GAME,
  payload,
});

export const fetchQuestionLoading = (payload) => ({
  type: FETCH_QUESTION_LOADING,
  payload,
});

export const fetchQuestionSuccess = (payload) => ({
  type: FETCH_QUESTION_SUCCESS,
  payload,
});

export const fetchQuestionError = (payload) => ({
  type: FETCH_QUESTION_ERROR,
  payload,
});

export const nextQuestion = (payload) => ({
  type: NEXT_QUESTION,
  payload,
});

export const questionResult = (payload) => ({
  type: QUESTION_RESULT,
  payload,
});

export const selectAnswer = (payload) => ({
  type: SELECT_ANSWER,
  payload,
});

export const startTimer = (payload) => ({
  type: START_TIMER,
  payload,
});

export const stopTimer = (payload) => ({
  type: STOP_TIMER,
  payload,
});
