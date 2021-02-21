export const state = {
  posts: [],
  currentPost: {},
  searchResults: []
};

export const loadCurrentPost=function(id = 1){
  state.currentPost = state.posts.find(p => p.id == id);
}
