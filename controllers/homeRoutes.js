const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

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

    // Serialize data so template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data into template
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "username"]
            }
          ]
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("post", {
      post,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

// gets one user by id
router.get("/user/:id", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: ["username"],
      include: [
        {
          model: Post,
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      user,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/editpost/:id", withAuth, async (req,res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        }
      ],
    });

    const post = postData.get({ plain: true });

    res.render("editPost", {
      post,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

// sign up page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/'); // Redirects to homepage if already logged in
    return;
  }
  res.render('signup');
});

// log in page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/'); // Redirects to homepage if already logged in
    return;
  }
  res.render('login');
});

module.exports = router;
