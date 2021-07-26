const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const app = express()
const dotenv = require('dotenv')
dotenv.config();
const mainRouter = require('./routes/main')
const userRouter = require('./routes/user')
const articleRouter = require('./routes/article')
const adminRouter = require('./routes/admin')
const { dbUrl, options } = require('./db/config')

mongoose.connect( dbUrl, options )
console.log(process.env)
console.log( dbUrl )

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(session({
  store: new FileStore(),
  key: 'userTea',
  secret: 'something',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 5000000,
    httpOnly: true,
  }
}))

app.use('/', mainRouter)
app.use('/user', userRouter)
app.use('/article', articleRouter)
app.use('/admin', adminRouter)



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log('Server started'))
