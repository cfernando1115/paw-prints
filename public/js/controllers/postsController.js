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

export const addPost = async function (data) {
  try {
    return new Promise(
      (resolve) => {
        const postData = `title=${data.title}&body=${data.body}`;
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/posts", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(postData);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 201) {
            resolve(state.posts.push(JSON.parse(xhr.response)));
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
