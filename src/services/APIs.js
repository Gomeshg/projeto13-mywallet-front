import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function getData(config) {
  const promise = axios.get(`${BASE_URL}/wallet`, config);
  return promise;
}

function getOneData(id, config) {
  const promise = axios.get(`${BASE_URL}/oneWallet/${id}`, config);
  return promise;
}

function postData(body, config) {
  const promise = axios.post(`${BASE_URL}/wallet`, body, config);
  return promise;
}

function updateData(id, body, config) {
  const promise = axios.put(`${BASE_URL}/wallet/${id}`, body, config);
  return promise;
}

function deleteData(id, config) {
  const promise = axios.delete(`${BASE_URL}/wallet/${id}`, config);
  return promise;
}

function logout(config) {
  const promise = axios.delete(`${BASE_URL}/logout`, config);
  return promise;
}

export {
  postSignIn,
  postSignUp,
  getData,
  getOneData,
  postData,
  updateData,
  deleteData,
  logout,
};
