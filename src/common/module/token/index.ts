const getToken = () => localStorage.getItem("token");
const getLocal = (key: string) => {
  return localStorage.getItem(key);
};
const setToken = (key: string, token: string) => {
  localStorage.setItem(key, token);
  console.log(key);
};
const removeToken = (key: string) => {
  localStorage.removeItem(key);
};

export { getToken, setToken, removeToken, getLocal };
