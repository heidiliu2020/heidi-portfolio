const BASE_URL = "https://api.github.com";
const userName = "heidiliu2020";

// 讀取使用者資訊
export const getUser = () =>
  fetch(`${BASE_URL}/users/${userName}`).then((res) => res.json());

// 讀取所有 repos
export const getAllRepos = () =>
  fetch(`${BASE_URL}/users/${userName}/repos`).then((res) => res.json());

// 讀取指定 repo
export const getRepo = (repoName) =>
  fetch(`${BASE_URL}/repos/${userName}/${repoName}`).then((res) => res.json());
