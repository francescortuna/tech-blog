const router = require("express").Router();
const { User, Post } = require("../../models");

// The "/api/users" endpoint

// gets one user by id
router.get("/:id", async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{
                model: Post
            }]
        });

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TODO: add user routes to create, login, and delete a user

module.exports = router;