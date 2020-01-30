export const TOKEN_KEY = null;
export const INFO_USER = null;
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem(INFO_USER);
export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(INFO_USER, user);
};
export const logout = () => {
  localStorage.removeItem(INFO_USER);
  return localStorage.removeItem(TOKEN_KEY);
};
