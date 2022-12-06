const editPost = async () => {
  const title = document.querySelector("#newPostTitle").value;
  const content = document.querySelector("#newPostContent").value;
  const post_url = window.location.pathname.split("/editpost/");
  const post_id = post_url[post_url.length - 1];

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".edit-post-btn").addEventListener("click", editPost);
