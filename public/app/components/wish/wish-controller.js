import WishService from './wish-service.js'

let _wishService = new WishService()

function draw(){
  let template = ''
  _wishService.num.forEach(wish => {
    template += ''
  })
document.getElementById('app').innerHTML = template
}

export default class WishController {
  constructor(){
    console.log(" this is the wish controller")
    _wishService
    _wishService.getWish(draw)
  }


}