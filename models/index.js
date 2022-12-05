const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many blog posts -> One to many
User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Post.belongsTo(User, {
    foreignKey: "user_id"
})

// User has many comments -> One to many
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
})

// Blog posts have many comments -> One to many
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(Post, {
    foreignKey: "post_id"
})

module.exports = { User, Post, Comment }; 