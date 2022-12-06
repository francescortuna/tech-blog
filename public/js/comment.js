const commentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#new-comment-content").value;
  const post_url = window.location.pathname.split("/post/");
  const post_id = post_url[post_url.length - 1];

  if (content) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ content, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".add-comment-card")
  .addEventListener("submit", commentFormHandler);
