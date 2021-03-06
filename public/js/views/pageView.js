import { View } from './view.js';

class PageView extends View{
    _output = document.querySelector('.prev-next');

    addHandlerPrevNext(handler) {
        this._output.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn');
            if (!btn) {
                return;
            }
            const postIndex = +btn.dataset.goto;
            handler(postIndex);
        })
    }

    _generateMarkup() {
        const numPosts = this._data.posts.length-1;
        const curIndex = this._data.posts.findIndex(post => post === this._data.currentPost);
        
        //post 1 of multiple posts
        if (curIndex === 0 && numPosts >= 1) {
            return this._generateBtnNext(curIndex);
        };

        //last post of multiple posts
        if (curIndex === numPosts && numPosts >= 1) {
            return this._generateBtnPrev(curIndex);
        };

        //middle post
        if (curIndex < numPosts) {
            return this._generateBtnSet(curIndex);
        };

        return '';
    }

    _generateBtnSet(curPost) {
        return `
            <button id="next" class="btn prev" data-goto="${curPost-1}"><ion-icon class="arrow-icon" name="arrow-back-circle-outline"></ion-icon></button>
            <button id="prev" class="btn next" data-goto="${curPost+1}"><ion-icon class="arrow-icon" name="arrow-forward-circle-outline"></ion-icon></button>
        `;
    }

    _generateBtnNext(curPost) {
        return `
            <button id="next" class="btn next" data-goto="${curPost+1}"><ion-icon class="arrow-icon" name="arrow-forward-circle-outline"></ion-icon></button>
        `;
    }

    _generateBtnPrev(curPost) {
        return `
            <button id="prev" class="btn prev" data-goto="${curPost-1}"><ion-icon class="arrow-icon" name="arrow-back-circle-outline"></ion-icon></button>
        `;
    }
}

export default new PageView();