
class CommentView {
    #output = document.getElementById('comments');
    #data;

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#clear();
        this.#output.innerHTML = markup;
    }

    #generateMarkup() {
        let html = '';
        this.#data.forEach(el => {
            html += `
        <p><b>${el.id}.</b> ${el.body}</p>
        `;
        })
        return html;
    }

    #clear() {
        this.#output.innerHTML = '';
    }
}

export default new CommentView();