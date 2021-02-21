import * as postModel from "../models/postModel.js";
import * as postsController from "./postsController.js";
import postsView from "../views/postsView.js";
import { commentModel, getCommentsByPostId } from "../models/commentModel.js";
import * as commentsController from "./commentsController.js";
import commentsView from "../views/commentsView.js";
import pageView from "../views/pageView.js";

async function controller() {
  //populate models
  await postsController.loadPosts();
  await commentsController.loadComments();

  //render initial views
  postModel.loadCurrentPost();
  postsView.render(postModel.state.currentPost);
  getCommentsByPostId(postModel.state.currentPost.id);
  commentsView.render(commentModel.commentsByPostId);
  pageView.render(postModel.state);
}

(function Init() {
  try {
    pageView.addHandlerPrevNext(controlCurrent);
    postsView.addHandlerAddPost(postsController.addPost);
    postsView.addHandlerSearch(controlSearch);
    function setUpEventListeners() {

      document
        .querySelector("#addComment")
        .addEventListener("click", async function () {
          const body = document.getElementById("comments-input").value;
          console.log(body);
          const postId = currentId;
          const data = `postId=${postId}&body=${body}&date=${new Date().toLocaleDateString(
            "en-US"
          )}`;
          await commentsController.postComment(data);
          getCommentsByPostId(currentId);
          commentsView.render(commentModel.commentsByPostId);
        });
      
    }
    controller();

    function controlCurrent(postId) {
      postModel.loadCurrentPost(postId);
      postsView.render(postModel.state.currentPost);
      getCommentsByPostId(postId);
      commentsView.render(commentModel.commentsByPostId);
      pageView.render(postModel.state);
    }

    //start here!!!

    async function controlSearch(query) {
      await postsController.searchPosts(query);
      controlCurrent(postModel.state.searchResults[0].id);
    }
  } catch (error) {
    console.log(error);
  }
})();
