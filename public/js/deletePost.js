const deletePost = async () => {
  const post_url = window.location.pathname.split("/post/");
  const post_id = post_url[post_url.length - 1];

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deletePost);
