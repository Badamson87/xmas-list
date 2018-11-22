import WishController from "./components/wish/wish-controller.js";

class App {
  constructor(){
    this.controllers = {
      wishController: new WishController()
    }
  }
}

// @ts-ignore
window.app = new App()