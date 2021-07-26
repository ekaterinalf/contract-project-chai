const Admin = require('../db/model/admins.model')
const router = require('express').Router()
const Teas = require('../db/model/teas.model')

router.get('/adminAddTea', async (req, res) => {
  const admin = await Admin.findOne()
  // console.log(admin)
  res.render('adminAddTea', admin)
})
router.get('/' , async (req, res) => {
  const admin = await Admin.findOne()
  res.render('admin')
})

router.post('/newTea', async (req, res) => {
  const { nameTea, region, description, img, coordinatX, coordinatY } = req.body
  console.log(req.body)
  const newTea = await new Teas({
    nameTea,
    region,
    description,
    img,
    coordinatX,
    coordinatY,
  })
  console.log(newTea)
  await newTea.save()
  res.redirect('/')

})


module.exports = router
