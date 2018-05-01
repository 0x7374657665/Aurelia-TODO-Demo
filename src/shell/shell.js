import {User} from '../entities/user'
import { inject } from 'aurelia-dependency-injection'
import {Aurelia} from 'aurelia-framework'
import routes from './routes'

@inject(Aurelia, User)
export class Shell {
  constructor(aurelia, user) {
    this.aurelia = aurelia
    this.user = user
    this.message = `Hello, ${this.user.name}!`
  }

  configureRouter(config, router) {
    this.router = router
    config.map(routes)
  }

  logout() {
    this.aurelia.setRoot('login/login')
  }
}
