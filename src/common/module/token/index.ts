const getToken = localStorage.getItem("token");

const setToken = (key: string, token: string) => {
  localStorage.setItem(key, token);
  console.log(key);
};
const removeToken = (key: string) => {
  localStorage.removeItem(key);
};

export { getToken, setToken, removeToken };
