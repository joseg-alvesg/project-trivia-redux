import { QUESTIONS_ENDPOINT, SESSION_TOKEN_ENDPOINT } from '../constants';

export const requestToken = async () => {
  try {
    const request = await fetch(SESSION_TOKEN_ENDPOINT);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Error requesting session token:', error);
    throw error;
  }
};

export const requestQuestions = async (token) => {
  try {
    const request = await fetch(`${QUESTIONS_ENDPOINT}${token}`);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Error requesting questions:', error);
    throw error;
  }
};
