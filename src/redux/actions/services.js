import {
  FETCH_QUESTION_ERROR,
  FETCH_QUESTION_LOADING,
  FETCH_QUESTION_SUCCESS,
} from '../../constants';

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
