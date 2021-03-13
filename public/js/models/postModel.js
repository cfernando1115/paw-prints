export const state = {
  posts: [],
  currentPost: {}
};

export const loadCurrentPost = function (index) {
  state.currentPost = state.posts[index] ?? state.posts[0];
}
