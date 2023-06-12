// 用户token
const Token = 'my-token';
// 账号密码
const Account = 'account';
// 全局主题
const Theme = 'theme';

// 用户token
export const getToken = () => localStorage.getItem(Token);
export const setToken = (value) => localStorage.setItem(Token, value);
export const removeToken = () => localStorage.removeItem(Token);
// 用户主题
export const getAccount = () => {
  try {
    const account = localStorage.getItem(Account);
    return JSON.parse(account) || {};
  } catch (error) {
    return {};
  }
};
export const setAccount = (value) =>
  localStorage.setItem(Account, JSON.stringify(value));
export const removeAccount = () => localStorage.removeItem(Account);

// 用户主题
export const getLocalTheme = () => localStorage.getItem(Theme);
export const setLocalTheme = (value) => localStorage.setItem(Theme, value);
export const removeLocalTheme = () => localStorage.removeItem(Theme);
