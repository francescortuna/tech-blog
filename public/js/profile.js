const newPostForm = async () => {
  const title = document.querySelector("#newPostTitle").value;
  const content = document.querySelector("#newPostContent").value;

  if (title && content) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".new-post-btn").addEventListener("click", newPostForm);
