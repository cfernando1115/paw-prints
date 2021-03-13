import * as postModel from "../models/postModel.js";
import { commentModel, getCommentsByPostId } from "../models/commentModel.js";
import { profileModel } from '../models/profileModel.js';

import * as postsController from "./postsController.js";
import * as commentsController from "./commentsController.js";
import { loadProfile } from "./profileController.js";

import postsView from "../views/postsView.js";
import commentsView from "../views/commentsView.js";
import pageView from "../views/pageView.js";
import profileView from "../views/profileView.js";

(async function Init() {
  try {
    pageView.addHandlerPrevNext(controlPage);
    //postsView.addHandlerAddPost(controlAddPost);
    postsView.addHandlerSearch(controlSearch);
    commentsView.addHandlerAddComment(controlAddComment);
    await postsController.loadPosts();
    await commentsController.loadComments();
    await loadProfile();

    controlCurrent();

    function controlCurrent(index = null) {
      profileView.render(profileModel.profile);
      postModel.loadCurrentPost(index);
      postsView.render(postModel.state.currentPost);
      getCommentsByPostId(postModel.state.currentPost.id);
      commentsView.render(commentModel.commentsByPostId);
      pageView.render(postModel.state);
    }

    function controlPage(postIndex) {
      controlCurrent(postIndex);
    }

    async function controlSearch(query) {
      await postsController.searchPosts(query);
      controlCurrent();
    }

    async function controlAddComment(body) {
      const data = {
        postId: postModel.state.currentPost.id,
        commentBody:body
      }
      await commentsController.addComment(data);
      getCommentsByPostId(postModel.state.currentPost.id);
      commentsView.render(commentModel.commentsByPostId);
    }

    async function controlAddPost(data) {
      await postsController.addPost(data);
      pageView.render(postModel.state);
    }

  } catch (error) {
    console.log(error);
  }
})();
