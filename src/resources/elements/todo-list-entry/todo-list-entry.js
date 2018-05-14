import { bindable } from "aurelia-templating";
import { inject } from "aurelia-dependency-injection";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(EventAggregator)
export class TodoListEntry {

  @bindable todoitem

  constructor(events) {
    this.editing = false
    this.updatedTaskText = ''
    this.events = events
  }

  attached() {
    this.updatedTaskText = this.todoitem.task
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
  }

  deleteTodoItem() {
    this.events.publish('todo:items:delete',this.todoitem)
  }
}
