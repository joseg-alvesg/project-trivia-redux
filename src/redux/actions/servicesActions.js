import {
  FETCH_QUESTION_ERROR,
  FETCH_QUESTION_LOADING,
  FETCH_QUESTION_SUCCESS,
  FETCH_SESSION_TOKEN_ERROR,
  FETCH_SESSION_TOKEN_LOADING,
  FETCH_SESSION_TOKEN_SUCCESS,
  TOKEN_KEY,
} from '../../constants';
import { requestToken, saveToLocalStorage } from '../../helpers';

export const fetchQuestionLoading = () => ({
  type: FETCH_QUESTION_LOADING,
});

export const fetchQuestionSuccess = (payload) => ({
  type: FETCH_QUESTION_SUCCESS,
  payload,
});

export const fetchQuestionError = (payload) => ({
  type: FETCH_QUESTION_ERROR,
  payload,
});

export const fetchSessionTokenLoading = () => ({
  type: FETCH_SESSION_TOKEN_LOADING,
});

export const fetchSessionTokenSuccess = (payload) => ({
  type: FETCH_SESSION_TOKEN_SUCCESS,
  payload,
});

export const fetchSessionTokenError = (payload) => ({
  type: FETCH_SESSION_TOKEN_ERROR,
  payload,
});

// TODO: criar thunk do SESSION TOKEN aqui

export const fetchSessionToken = () => async (dispatch) => {
  dispatch(fetchSessionTokenLoading());
  try {
    const response = await requestToken();
    dispatch(fetchSessionTokenSuccess(response));
    saveToLocalStorage(TOKEN_KEY, response.token);
  } catch (error) {
    dispatch(fetchSessionTokenError(error));
  }
};

// TODO: criar thunk do QUESTION aqui
