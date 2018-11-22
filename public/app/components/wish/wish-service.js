// @ts-ignore

let api = axios.create({
  baseURL: "/api/wish"
})

export default class WishService{
  constructor(){
    console.log("this is wish service")
  }
}