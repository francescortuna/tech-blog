const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// get all posts -> for homepage
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
router.get("/post/:id", async (req, res) => {
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

// gets one user by id
router.get("/user/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: ["username"],
      include: [
        {
          model: Post,
        },
      ],
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
