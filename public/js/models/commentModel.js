
export const commentModel = {
    comments: [],
    commentsByPostId:[]
}

export const getCommentsByPostId = function (postId) {
    clearCommentsByPostId();
    commentModel.comments.forEach(el => {
        if (parseInt(el.postId) === postId) {
            commentModel.commentsByPostId.push(el);
        }
    })
}

function clearCommentsByPostId(){
    commentModel.commentsByPostId = [];
}