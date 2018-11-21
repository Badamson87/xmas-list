const router = require('express').Router()
let Cat = require('../models/wish')

//logger
router.get('/', (req, res, next) => {
  console.log('wish router')
  next()
})

//get all list


// get list by id


// create /post wish


//edit a wish


// delete a wish


// same as exports default
module.exports = router