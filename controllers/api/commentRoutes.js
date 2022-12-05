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

module.exports = router;
