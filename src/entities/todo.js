import {Sequence} from '../resources/sequences/sequence'
import { TodoItem } from './todoItem';

export class Todo {
  constructor(title='', description='') {
    this.id = Sequence.next()
    this.title = title
    this.description = description
    this.todoItems = []
  }

  makeItem(itemText) {
    const item = new TodoItem(itemText)
    item.parentTodoId = this.id
    this.todoItems.push(item)
  }

  removeItem(targetItem) {
    const index = this.todoItems.findIndex(item => item.id === targetItem.id)
    this.todoItems.splice(index,1)
  }
}