import { commentModel } from '../models/commentModel.js';

export const loadComments = async function () {
    try {
        return new Promise(resolve=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET','http://localhost:3000/comments', true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    resolve(commentModel.comments = JSON.parse(xhr.response));
                }
            }
        }, reject => {
            reject(console.log('there was an issue.'));
        })
    } catch (error) {
        throw error;
    }
}

export const postComment = async function (data) {
    try {
        return new Promise(resolve=>{
            const xhr = new XMLHttpRequest();
            xhr.open('POST','http://localhost:3000/comments', true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(data);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    resolve(commentModel.comments.push(JSON.parse(xhr.response)));
                }
            }
        }, reject => {
            reject(console.log('there was an issue.'));
        })
    } catch (error) {
        throw error;
    }
}