export const SESSION_TOKEN_ENDPOINT = 'https://opentdb.com/api_token.php?command=request';
export const QUESTIONS_ENDPOINT = (token) => `https://opentdb.com/api.php?amount=5&token=${token}`;
