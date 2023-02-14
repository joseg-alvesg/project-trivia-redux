import { SESSION_TOKEN_ENDPOINT, QUESTIONS_ENDPOINT } from '../constants';

export const requestToken = async () => {
  const request = await fetch(SESSION_TOKEN_ENDPOINT);
  const response = await request.json();
  return response;
};

export const requestQuestions = async (token) => {
  const request = await fetch(`${QUESTIONS_ENDPOINT}${token}`);
  const response = await request.json();
  return response;
};
