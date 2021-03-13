import { View } from './view.js';

class PostsView extends View{
  _output = document.getElementById("posts");

  _generateMarkup() {
    return `
        <div class="likes"><button class="icon-btn"><ion-icon class="thumb-icon" name="thumbs-up-outline"></ion-icon></button><span> ${this._data.likes}</span></div>
        <h2 class="post-title">${this._data.title}</h2>
        <p class="post-body">${this._data.body}</p>
        <img src="${this._data.img}"></img>
      `;
  }

  addHandlerLikes(handler) {
    document.querySelector('.likes button').addEventListener('click', function () {
      handler();
    })
  }

  addHandlerSearch(handler) {
    document.querySelector('#search').addEventListener('click', function () {
      const query = document.querySelector('input[name="search"]').value;
      handler(query);
    });
  }

  addHandlerClearSearch(handler) {
    document.querySelector('#clear-search').addEventListener('click', function () {
      document.querySelector('input[name="search"]').value = '';
      handler();
    })
  }
}

export default new PostsView();
