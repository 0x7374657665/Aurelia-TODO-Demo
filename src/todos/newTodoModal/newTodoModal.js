import { Todo } from "../../entities/todo";
import { EventAggregator } from "aurelia-event-aggregator";
import { inject } from "aurelia-dependency-injection";

@inject(EventAggregator)
export class NewTodoModal {
  constructor(events) {
    this.title = ''
    this.description = ''
    this.events = events
  }

  create() {
    this.events.publish('todo:create',new Todo(this.title,this.description))
    this.title = ''
    this.description = ''
  }
}
