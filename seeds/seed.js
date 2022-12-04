const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userSeedData = require("./userSeedData.json");
const postSeedData = require("./postSeedData.json");
const commentSeedData = require("./commentSeedData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await User.bulkCreate(userSeedData);
    console.log('\n----- USERS SEEDED -----\n');

    await Post.bulkCreate(postSeedData);
    console.log('\n----- POSTS SEEDED -----\n');

    await Comment.bulkCreate(commentSeedData);
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedDatabase();