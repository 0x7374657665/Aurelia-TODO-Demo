import { TodoService } from "../backend/todoService"
import { inject } from 'aurelia-dependency-injection'
import { Todo } from "../entities/todo"
import { EventAggregator } from "aurelia-event-aggregator";

@inject(TodoService, EventAggregator)
export class Todos {

  constructor(todoService, events) {
    this.todoService = todoService
    this.todos = []
    this.events = events
  }

  activate() {
    this.todos = this.todoService.getTodos()
    this.events.subscribe('todo:create', newTodo => {
      this.todos.unshift(newTodo)
    })
  }
}
