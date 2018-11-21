import WishService from './wish-service.js'

let _wishService = new WishService()

export default class WishController {
  constructor(){
    console.log(" this is the wish controller")
    _wishService
  }
}