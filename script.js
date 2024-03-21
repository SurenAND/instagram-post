// like post
const likeIcon = document.getElementById("like");
const postImage = document.getElementById("post-image");

// like by click on like icon
likeIcon.addEventListener("click", handleLike);
function handleLike() {
  if (likeIcon.src.match("./assets/images/like-icon.svg")) {
    likeIcon.src = "./assets/images/liked-icon.svg";
  } else likeIcon.src = "./assets/images/like-icon.svg";
}
