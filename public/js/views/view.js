export class View{
    _data;

    render(data) {
      this._data = data;
      const markup = this._generateMarkup();
      this._clear();
      this._output.innerHTML = markup;
    }

    _clear() {
        this._output.innerHTML = "";
      }
}
