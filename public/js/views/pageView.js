import { View } from './view.js';

class PageView extends View{
    _output = document.querySelector('.prev-next');

    addHandlerPrevNext(handler) {
        this._output.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn');
            if (!btn) {
                return;
            }
            const postId = +btn.dataset.goto;
            handler(postId);
        })
    }

    _generateMarkup() {
        const numPosts = this._data.posts.length;
        const curPost = this._data.currentPost.id;
        
        //post 1 of multiple posts
        if (curPost === 1 && numPosts > 1) {
            return this._generateNextBtn(curPost);
        };

        //last post of multiple posts
        if (curPost === numPosts && numPosts > 1) {
            return this._generatePrevBtn(curPost);
        };

        //middle post
        if (curPost < numPosts) {
            let html= this._generatePrevBtn(curPost);
            html+= this._generateNextBtn(curPost);

            return html;
        };

        return '';
    }

    _generatePrevBtn(curPost) {
        return `
        <button id="prev" class="btn" data-goto="${curPost-1}">Prev</button>
        `;
    }

    _generateNextBtn(curPost) {
        return `
        <button id="prev" class="btn" data-goto="${curPost+1}">Next</button>
        `;
    }
}

export default new PageView();