const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {
  // TODO: add function to check if user's entered password matches password from db
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true, // Username must only contain alphanumeric
        len: [5], // Username must be minimum 5 characters
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Password must be minimum 8 characters
      },
    },
  },
  {
    // TODO: add hooks for password
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;