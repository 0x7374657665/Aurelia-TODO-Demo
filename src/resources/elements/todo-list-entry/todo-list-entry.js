import { bindable } from "aurelia-templating";

export class TodoListEntry {

  @bindable todoItem

  constructor() {
    this.editing = false
  }
}
