const dotenv = require('dotenv')

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@teashop.5bxqe.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

module.exports = { dbUrl, options }
