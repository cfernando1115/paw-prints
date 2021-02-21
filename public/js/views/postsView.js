import { View } from './view.js';

class PostsView extends View{
  _output = document.getElementById("posts");

  _generateMarkup() {
    return `
        <h2>Title: ${this._data.title}</h2>
        <h3>Author: ${this._data.author}</h3>
        `;
  }

  addHandlerAddPost(handler) {
    document.querySelector("#addPostForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const title = document.querySelector('#addPostForm input[name="title"]').value;
      const author = document.querySelector('#addPostForm input[name="author"]').value;
      const data = {
        title: title,
        author: author
      }
      handler(data);
    });
  }

  addHandlerSearch(handler) {
    document.querySelector("#search").addEventListener("click", async function () {
      const query = document.querySelector('input[name="search"]').value;
      handler(query);
    });
  }
}

export default new PostsView();
