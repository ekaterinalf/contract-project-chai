const mongoose = require( 'mongoose' );

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Users = mongoose.model( 'User', usersSchema );

module.exports = Users;
