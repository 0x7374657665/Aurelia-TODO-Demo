import {UserService} from '../backend/userService'
import {User} from '../entities/user'
import {Aurelia} from 'aurelia-framework'
import { inject } from 'aurelia-dependency-injection'



@inject(Aurelia, UserService)
export class Login {
  constructor(aurelia, userSvc) {
    this.aurelia = aurelia
    this.userSvc = userSvc
    this.name = ''
    this.password = ''
    this.message = ''
  }

  login() {

    let user = new this.userSvc.authenticate(this.name,this.password)
    console.log(user)
    if(user.name) {
      this.aurelia.use.instance(User,user)
      this.aurelia.setRoot('shell/shell')
    } else {
      this.message = 'Login Failed.'
    }
  }





  
}
