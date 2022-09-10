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
  const promise = axios.get(`${BASE_URL}/get-data`, config);
  return promise;
}

function postData(body, config) {
  const promise = axios.post(`${BASE_URL}/insert-data`, body, config);
  return promise;
}

function updateData(body, config) {
  const promise = axios.put(`${BASE_URL}/update-data`, body, config);
  return promise;
}

function deleteData(body, config) {
  const promise = axios.delete(`${BASE_URL}/delete-data`, body, config);
  return promise;
}

export { postSignIn, postSignUp, getData, postData, updateData, deleteData };
