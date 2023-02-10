// TODO: substituir o uso dessa função pela saveToLocalStorage na aplicação
export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const saveToLocalStorage = (key, value) => localStorage
  .setItem(key, JSON.stringify(value));

export const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
