// @ts-ignore

let api = axios.create({
  baseURL: "/api/wish"
})

let _wishList = []

export default class WishService {
  constructor() {
    console.log("this is wish service")
  }

getWish(draw){
  api.get('').then(res => {
    console.log(res.data)
    _wishList = res.data
    draw(_wishList)
  })
}


}