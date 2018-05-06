import { bindable } from "aurelia-templating";

export class TodoListEntry {

  @bindable todoitem

  constructor() {
    this.editing = false
    console.log('created todo list entry:', this)
  }
}
