const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many blog posts -> One to many
User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

// User has many comments -> One to many
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

// Blog posts have many comments -> One to many
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});

module.exports = { User, Post, Comment }; 