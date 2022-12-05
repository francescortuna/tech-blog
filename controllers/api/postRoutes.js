const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// "/api/posts"

// get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Comment,
        },
      ],
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
