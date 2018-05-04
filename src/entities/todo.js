import {Sequence} from '../resources/sequences/sequence'

export class Todo {
  constructor(title='', description='') {
    this.id = Sequence.next()
    this.title = title
    this.description = description
  }
}
