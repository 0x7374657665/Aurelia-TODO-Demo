import { TodoService } from "../backend/todoService"
import { inject } from 'aurelia-dependency-injection'
import { Todo } from "../entities/todo"
import { EventAggregator } from "aurelia-event-aggregator";

@inject(TodoService, EventAggregator)
export class Todos {

  constructor(todoService, events) {
    this.todoService = todoService
    this.todos = []
    this.subscriptions = []
    this.events = events
  }

  activate() {
    this.todos = this.todoService.getTodos()
    this.subscriptions.push(
      this.events.subscribe('todo:added', todo => {
        this.todos = this.todoService.getTodos()
      })
    )
  }

  detached() {
    this.subscriptions.forEach(sub => sub.dispose())
    this.todos.forEach(this.todoService.merge)
  }
}
