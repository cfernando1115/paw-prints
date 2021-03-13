export const commentModel = {
  comments: [],
  commentsByPostId: [],
};

export const getCommentsByPostId = function (postId=1) {
  commentModel.commentsByPostId = commentModel.comments.filter(function(el) {
    if (parseInt(el.postId) === postId) {
      return el;
    }
  });
};
