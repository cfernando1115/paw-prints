import { questionModel } from '../models/questionModel.js';

export const loadQuestions = async function () {
    try {
        return new Promise(resolve=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET','http://localhost:3000/posts', true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    resolve(questionModel.questions = JSON.parse(xhr.response));
                }
            }
        }, reject => {
            reject(console.log('there was an issue.'));
        })
    } catch (error) {
        throw error;
    }
}

export const postQuestion = async function (data) {
    try {
        return new Promise(resolve=>{
            const xhr = new XMLHttpRequest();
            xhr.open('POST','http://localhost:3000/posts', true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(data);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    resolve(questionModel.questions.push(JSON.parse(xhr.response)));
                }
            }
        }, reject => {
            reject(console.log('there was an issue.'));
        })
    } catch (error) {
        throw error;
    }
}

export const searchQuestion = async function (search) {
    try {
        return new Promise(resolve=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET',`http://localhost:3000/posts?q=${search}`, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    resolve(JSON.parse(xhr.response));
                }
            }
        }, reject => {
            reject(console.log('there was an issue.'));
        })
    } catch (error) {
        throw error;
    }
}