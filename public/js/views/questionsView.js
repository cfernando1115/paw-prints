
class QuestionView{
    #output = document.getElementById('output');
    #data;

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#output.innerHTML = markup;
    }

    #generateMarkup() {
        return `
        <h2>Title: ${this.#data.title}</h2>
        <h3>Author: ${this.#data.author}</h3>
        `;
    }

    #clear() {
        this.#output.innerHTML = '';
    }
}

export default new QuestionView();

