const router = require('express').Router()
const Teas = require ('../db/model/teas.model')

router.get('/markerList', async (req, res) => {
  const preMarkerList = await Teas.find()
  const markerList = preMarkerList.map(el => {
    return {name: el.nameTea, region: el.region, coordinatX: el.coordinatX, coordinatY: el.coordinatY}
  })
  res.json(markerList)
})
router.get('/' , (req, res) => {
  let user = req.session.user
  res.render('main', { user })
})


module.exports = router

