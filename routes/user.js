const User = require('../db/model/users.model')
const router = require('express').Router()
const Admin = require('../db/model/admins.model')


router.get('/signUpForm', (req, res) => {
  res.render('registration', { layout: false })
})

router.post('/signUp', async (req, res) => {
  console.log('hey')
  const { name, password, email } = req.body // здесь нужно вставить якоря с хбс-ок
  const userEmail = await User.findOne({ email: email })
  const text = { text: 'такой email уже существует' };
  console.log(userEmail)
  if (userEmail && email === userEmail.email) {
    res.render('registration', { text })
  } else {
    const user = await new User({
      name,
      email,
      password,
    })
    await user.save()
    req.session.user = user
    res.render('main', { user })
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.clearCookie("userTea") // тут нужно прописать точное имя сессии как в настройках
  res.redirect('/')
})

router.get('/loginform', (req, res) => {
  res.render('login', {layout: false})
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body // тут имена из хбс-ок
  const admin = await Admin.findOne({ email: email });
  const user = await User.findOne({ email: email });
  

  if (admin && email === admin.email && password === admin.password) {
    req.session.admin = admin
    res.redirect('/admin')
  } else if (user && email === user.email && password === user.password) {
      req.session.user = user
      res.render('main', { user })
    }
    else {
       const textError = 'Введен неверный email или пароль';
        res.render( 'login', {textError} );
    }
  }
)

router.get('/homepage', (req, res) => { // прописать хбс-домашней страницы пользователя

})

module.exports = router

