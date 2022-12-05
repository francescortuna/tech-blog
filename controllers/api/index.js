const router = require("express").Router();
const UserRoutes = require("./userRoutes");
const PostRoutes = require("./postRoutes");
const CommentRoutes = require("./commentRoutes");

router.use("/users", UserRoutes);
router.use("/posts", PostRoutes);
router.use("/comments", CommentRoutes);

module.exports = router;