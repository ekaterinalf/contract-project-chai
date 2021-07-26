const teasArticle = require('../db/model/teas.model')
const Comment = require('../db/model/comments.model')
const router = require('express').Router()
const User = require('../db/model/users.model')

router.get('/allArticles', async (req, res) => {
  console.log('метод работает');
  const articles = await teasArticle.find()
  console.log('Массив статей');
  res.render('allArticles', { articles })
})


router.get('/:region', async (req, res) => { 
  let user = req.session.user
  let article = await teasArticle.findOne({ region: req.params.region })
  let comments = await Comment.find({region: req.params.region}).populate('author')
  res.render('teaarticle', { article , comments, userArticle: user, user}) // связать с хбс-кой article. подумать о массиве и связать это с рендерингом в создании статьи, плюс прописать как отображаются комментарии
})

router.get('/createForm', (req, res) => { // форма для создания статьи
  res.render('createForm')
})

router.post('/createArticle', async (req, res) => { // создание статьи
  let { nameTea, region, text } = req.body 
  let article = new teasArticle ({ 
    nameTea: nameTea,
    region: region,
    description: text,
  })

  await article.save()
  res.render('article', { article })
})

router.delete('/deleteArticle/:articleId', async (req, res) => { // удаление статьи
  let { articleId } = req.params
  await teasArticle.deleteOne({ id: articleId })
  res.render('admin')
})

router.delete('/', async (req, res) => {
  const { author } = req.body
  // console.log(author)
  const authorId = await User.findOne({name: author})
  console.log(authorId)
  await Comment.deleteOne({author: authorId.id})
  res.send('deleted')
})

router.post('/:articleId', async (req, res) => { // оставить комментарий
  let nameUser = req.session.user.name
  console.log(nameUser)
  let author = await User.findOne({name: nameUser})
  console.log(author)
  let {articleId} = req.params
  let { text } = req.body
  let comment = new Comment ({ // логига модели комментария
    author: author.id,
    region: articleId,
    content: text,
  })
  console.log(comment)
  await comment.save()
  const createdComment = await Comment.findOne({_id: comment._id}).populate('author')
  res.json({comment: createdComment}) // либо отрендерить сразу на клиенте либо тут послать всю инфу. пока отсылаю весь массив комментариев, потом переписать на фетч с добавлением одного комментария
})



module.exports = router;
