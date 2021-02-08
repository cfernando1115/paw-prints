import { questionModel } from '../models/questionModel.js';
import * as questionsController from './questionsController.js';
import questionView from '../views/questionsView.js';
import commentsView from '../views/commentsView.js';
import * as commentsController from './commentsController.js';
import { commentModel, getCommentsByPostId } from '../models/commentModel.js';

(async function Controller() {
    try {
        let currentId = 1;
        setUpEventListeners();
        await questionsController.loadQuestions();
        questionView.render(questionModel.questions[0]);
        await commentsController.loadComments();
        getCommentsByPostId(currentId);
        commentsView.render(commentModel.commentsByPostId);

        function setUpEventListeners() {
            document.querySelector('#next').addEventListener('click', next);
            document.querySelector('#prev').addEventListener('click', prev);
            document.querySelector('#myForm').addEventListener('submit', function (e) {
                e.preventDefault();
                const title = document.querySelector('#myForm input[name="title"]').value;
                const author = document.querySelector('#myForm input[name="author"]').value;
                const data = `title=${title}&author=${author}`;
                questionsController.postQuestion(data);
            })
            document.querySelector('#search').addEventListener('click', async function () {
                const search = document.querySelector('input[name="search"]').value;
                const result = await questionsController.searchQuestion(search);
                questionView.render(result[0]);
            });
            document.querySelector('#addComment').addEventListener('click', async function () {
                const body = document.getElementById('comments-input').value;
                console.log(body);
                const postId = currentId;
                const data = `postId=${postId}&body=${body}`;
                await commentsController.postComment(data);
                getCommentsByPostId(currentId);
                commentsView.render(commentModel.commentsByPostId);
            });
        }
        
        function next() {
            currentId++;
            currentId = currentId > questionModel.questions.length ? 1 : currentId;
            controlCurrent();
        }

        function prev() {
            currentId--;
            currentId = currentId > 0 ? currentId : questionModel.questions.length;
            controlCurrent();
        }

        function controlCurrent() {
            const question = questionModel.questions.find(q => q.id === currentId);
            questionView.render(question);
            getCommentsByPostId(currentId);
            commentsView.render(commentModel.commentsByPostId);
        }
    } catch (error) {
        console.log(error);
    }
})();

 

