const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// "/api/posts"

// create a post
router.post("/", async (req,res) => {
  try {
    const post = await Post.create({
      ...req.body,
      // user_id: req.session.user_id
    });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
