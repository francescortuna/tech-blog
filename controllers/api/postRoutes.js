const router = require("express").Router();
const Post = require("../../models/Post");

// "/api/posts"

// create a post
router.post("/", async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a post based on its id
router.put("/:id", async (req, res) => {
  try {
    const postData = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
        edited: true
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a post based on its id
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id
      },
    });

    if (!postData) {
      res.status(404).json("No post found with this ID!");
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
