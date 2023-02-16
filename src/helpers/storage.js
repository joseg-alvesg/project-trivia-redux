import { TOKEN_KEY } from '../constants';

export const saveToLocalStorage = (key, item) => {
  try {
    if (typeof item === 'string') {
      return localStorage.setItem(key, item);
    }
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(`Error saving item to local storage: ${error}`);
  }
};

export const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  try {
    if (key === TOKEN_KEY) {
      return item ?? '';
    }
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error parsing item from local storage: ${error}`);
    return null;
  }
};

export const deleteKeyFromLocalStorage = (key) => {
  try {
    if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.error(`Error deleting item from local storage: ${error}`);
  }
};

export const deleteArrayItemFromLocalStorage = (key, item) => {
  try {
    const savedKey = localStorage.getItem(key);
    if (!savedKey) return;
    let items = JSON.parse(savedKey);
    if (!Array.isArray(items)) return;
    if (!items.includes(item)) return;
    items = items.filter((i) => i !== item);
    localStorage.setItem(key, JSON.stringify(items));
  } catch (error) {
    console.error(`Error deleting item from local storage: ${error}`);
  }
};
