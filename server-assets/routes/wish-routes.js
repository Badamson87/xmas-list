const router = require('express').Router()
let Wish = require('../models/wish')

//logger
router.get('/', (req, res, next) => {
  console.log('wish router')
  next()
})

//get all list

router.get('/', (req, res, next) => {
  //returns all wishs from the database
  Wish.find({})
    .then(wish => {
      res.send(wish)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// get list by id

router.get('/:id', (req, res, next) => {
  Wish.findById(req.params.id)
    .then(wish => {
      res.send(wish)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


// create /post wish

router.post('/', (req, res, next) => {
  Wish.create(req.body)
    .then(wish => {
      res.send(wish)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//edit a wish

router.put('/:id', (req, res, next) => {
  Wish.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(wish => {
      res.send(wish)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// delete a wish

router.delete('/:id', (req, res, next) => {
  Wish.findByIdAndDelete(req.params.id)
    .then(deletedWish => {
      res.send('wish removed')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// same as exports default
module.exports = router