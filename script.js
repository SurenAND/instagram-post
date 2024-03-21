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

// save post
const saveIcon = document.getElementById("save");

// save by click on save icon
saveIcon.addEventListener("click", handleSave);
function handleSave() {
  if (saveIcon.src.match("./assets/images/save-icon.svg")) {
    saveIcon.src = "./assets/images/saved-icon.svg";
  } else saveIcon.src = "./assets/images/save-icon.svg";
}
