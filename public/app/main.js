import WishController from "./components/wish/wish-controller.js";

class App {
  constructor(){
    this.controllers = {
      wishController: new WishController()
    }
  }
}

windows.app = new App()