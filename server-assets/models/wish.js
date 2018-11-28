let mongoose = require('mongoose')
let Schema = mongoose.Schema

let Wish = new Schema({
  name: { type: String, required: true },
  description: { type: String, require: true },
  img: { type: String },
  url: { url: String }

})

module.exports = mongoose.model('Wish', Wish)