const router = require("express").Router();
const Comment = require("../../models/Comment");

// /api/comments

// create a comment
router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a comment based on its id
router.put("/:id", async (req, res) => {
  try {
    const commentData = await Comment.update(
      {
        content: req.body.content,
        edited: true
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id
        },
      }
    );

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a comment based on its id
router.delete("/:id", async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });

    if (!commentData) {
      res.status(404).json("No comment found with this ID!");
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
