import { View } from './view.js';

class CommentsView extends View{
  _output = document.getElementById("comments");

  addHandlerAddComment(handler) {
    document.querySelector("#addComment").addEventListener("click", async function () {
      const body = document.getElementById("comments-input");
      handler(body.value);
      body.value = '';
    });
  }

  _generateMarkup() {
    let html = "";
    this._data.forEach((el) => {
      html += `
        <p><b>${el.date}:</b><br> ${el.body}</p>
        `;
    });
    return html;
  }
}

export default new CommentsView();
