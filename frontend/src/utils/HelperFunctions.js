const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};
export const removeToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
export const setToken = (val) => {
  localStorage.setItem(ACCESS_TOKEN, val);
};
