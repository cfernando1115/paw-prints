import { state } from "../models/postModel.js";

export const loadPosts = async function () {
  try {
    return new Promise(
      (resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/posts", true);
        xhr.send();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve((state.posts = JSON.parse(xhr.response)));
          }
        };
      },
      (reject) => {
        reject(console.log("there was an issue."));
      }
    );
  } catch (error) {
    throw error;
  }
};

export const updatePost = async function (data) {
  try {
    return new Promise(
      (resolve) => {
        const putData = `title=${data.title}&body=${data.body}&likes=${data.likes}&img=${data.img}`;
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", `http://localhost:3000/posts/${data.id}`, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(putData);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve();
          }
        };
      },
      (reject) => {
        reject(console.log("there was an issue."));
      }
    );
  } catch (error) {
    throw error;
  }
};

export const searchPosts = async function (search) {
  try {
    return new Promise(
      (resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `http://localhost:3000/posts?q=${search}`, true);
        xhr.send();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(state.posts = JSON.parse(xhr.response));
          }
        };
      },
      (reject) => {
        reject(console.log("there was an issue."));
      }
    );
  } catch (error) {
    throw error;
  }
};

