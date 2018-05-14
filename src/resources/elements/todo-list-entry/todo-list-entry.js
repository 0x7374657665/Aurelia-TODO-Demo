import { bindable } from "aurelia-templating";

export class TodoListEntry {

  @bindable todoitem

  constructor() {
    this.editing = false
    this.updatedTaskText = ''
  }

  attached() {
    this.updatedTaskText = this.todoitem.task
    console.log('added todo item:',this.todoitem)
  }

  toggleEditing() {
    this.updatedTaskText = this.todoitem.task
    this.editing = !this.editing
  }

  updateTask() {
    this.todoitem.task = this.updatedTaskText
    this.toggleEditing()
  }

  noVolatileUpdates() {
    return this.todoitem.task === this.updatedTaskText
  }

  toggleDone() {
    this.todoitem.done = !this.todoitem.done
    return true
  }

  deleteTodoItem() {
    console.log(`deleting todo item ${this.todoitem.id}`)
  }
}
