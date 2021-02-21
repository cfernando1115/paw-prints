import { View } from './view.js';

class CommentsView extends View{
  _output = document.getElementById("comments");

  _generateMarkup() {
    let html = "";
    this._data.forEach((el) => {
      html += `
        <p><b>${el.date}: </b> ${el.body}</p>
        `;
    });
    return html;
  }
}

export default new CommentsView();
