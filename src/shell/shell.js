import {User} from '../entities/user'
import { inject } from 'aurelia-dependency-injection'

@inject(User)
export class Shell {
  constructor(user) {
    this.user = user
    this.message = `Hello, ${this.user.name}!`
  }
}
