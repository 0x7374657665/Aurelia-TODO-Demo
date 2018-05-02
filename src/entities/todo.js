import {Sequence} from '../resources/sequences/sequence'

export class Todo {
  constructor() {
    this.id = Sequence.next()
    this.title = ''
    this.description = ''
  }
}
