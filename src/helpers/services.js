import { SESSION_TOKEN_ENDPOINT, QUESTIONS_ENDPOINT } from '../constants';

export const tokenApiRequest = async () => {
  const request = await fetch(SESSION_TOKEN_ENDPOINT);
  const response = await request.json();
  console.log(response);
  return response;
};

export const questionApiRequest = async (token) => {
  const request = await fetch(QUESTIONS_ENDPOINT(token));
  const response = await request.json();
  console.log(response);
  return response;
};
