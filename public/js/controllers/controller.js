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
    postsView.addHandlerSearch(controlSearch);
    postsView.addHandlerClearSearch(controlReset);
    commentsView.addHandlerAddComment(controlAddComment);
    await postsController.loadPosts();
    await commentsController.loadComments();
    await loadProfile();
    profileView.render(profileModel.profile);

    controlCurrent();

    function controlCurrent(index = null) {
      postModel.loadCurrentPost(index);
      postsView.render(postModel.state.currentPost);
      getCommentsByPostId(postModel.state.currentPost.id);
      commentsView.render(commentModel.commentsByPostId);
      pageView.render(postModel.state);
      postsView.addHandlerLikes(controlLikes);
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

    async function controlLikes() {
      const currentIndex = postModel.state.posts.indexOf(postModel.state.currentPost);
      postModel.addLike(currentIndex);
      await postsController.updatePost(postModel.state.posts[currentIndex]);
      postModel.loadCurrentPost(currentIndex);
      postsView.render(postModel.state.currentPost);
      postsView.addHandlerLikes(controlLikes);
    }

    async function controlReset() {
      await postsController.loadPosts();
      controlCurrent();
    }
  } catch (error) {
    console.log(error);
  }
})();
