export const saveToLocalStorage = (key, item) => localStorage
  .setItem(key, JSON.stringify(item));

export const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const deleteKeyFromLocalStorage = (key) => localStorage.removeItem(key);

export const deleteArrayItemFromLocalStorage = (key, item) => {
  const savedKey = localStorage.getItem(key);
  if (!savedKey) return;
  let items = JSON.parse(savedKey);
  items = items.filter((i) => i !== item);
  localStorage.setItem(key, JSON.stringify(items));
};
