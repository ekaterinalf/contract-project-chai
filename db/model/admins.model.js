const mongoose = require( 'mongoose' );

const adminsSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Admins = mongoose.model( 'Admin', adminsSchema );

module.exports = Admins;
