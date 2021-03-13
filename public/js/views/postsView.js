import { View } from './view.js';

class PostsView extends View{
  _output = document.getElementById("posts");

  _generateMarkup() {
    return `
        <div class="likes"><button class="icon-btn"><ion-icon class="thumb-icon" name="thumbs-up-outline"></ion-icon></button><span> ${this._data.likes}</span></div>
        <h2 class="post-title">Title: ${this._data.title}</h2>
        <h3 class="post-body">Post: ${this._data.body}</h3>
      `;
  }

  /*addHandlerAddPost(handler) {
    document.querySelector("#addPostForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const title = document.querySelector('#addPostForm input[name="title"]').value;
      const body = document.querySelector('#addPostForm input[name="body"]').value;
      const data = {
        title: title,
        body: body
      }
      handler(data);
    });
  }*/

  addHandlerSearch(handler) {
    document.querySelector("#search").addEventListener("click", async function () {
      const query = document.querySelector('input[name="search"]').value;
      handler(query);
    });
  }
}

export default new PostsView();
