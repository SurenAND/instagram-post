// like post
const likeIcon = document.getElementById("like");
const postImage = document.getElementById("post-image");
const postLike = document.getElementById("like-heart");

// like by click on like icon
likeIcon.addEventListener("click", handleLike);
function handleLike() {
  if (likeIcon.src.match("./assets/images/like-icon.svg")) {
    likeIcon.src = "./assets/images/liked-icon.svg";
  } else likeIcon.src = "./assets/images/like-icon.svg";
}

// like by double click on image
postImage.addEventListener("dblclick", handleLikeByDblClick);
function handleLikeByDblClick() {
  if (likeIcon.src.match("./assets/images/like-icon.svg")) {
    likeIcon.src = "./assets/images/liked-icon.svg";
    postLike.classList.add("active");
    setTimeout(() => {
      postLike.classList.remove("active");
    }, 300);
  }
}
