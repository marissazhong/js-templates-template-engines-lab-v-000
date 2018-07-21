
function createPost() {
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postBody = document.getElementById("postBody").value;

  
}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  let commentTemplate = document.getElementById("comment-template").innerHTML;
  let templateFn = _.template(commentTemplate);
  let commentsDiv = document.getElementById("comments");

  let templateHTML = templateFn({'comment': comment, 'commenter': commenter});
  commentsDiv.innerHTML += templateHTML;
}
