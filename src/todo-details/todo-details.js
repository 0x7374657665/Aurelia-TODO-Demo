import { bindable } from "aurelia-templating";
import { TodoService } from "../backend/todoService";
import { inject } from "aurelia-dependency-injection";
import { Router } from "aurelia-router";
import { TodoItem } from "../entities/todoItem";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(TodoService, Router, EventAggregator)
export class TodoDetails {

  @bindable todo

  constructor(todoService, router, events) {
    this.todoService = todoService,
    this.router = router
    this.events = events
    this.newTaskText = ''
    this.subscriptions = []
  }

  activate(params) {
    this.todo = this.todoService.getTodo(params.id)
    this.subscriptions.push(this.events.subscribe('todo:items:delete', payload => {
      this.todo.removeItem(payload)
    }))
  }

  deactivate() {
    this.subscriptions.forEach(sub => sub.dispose())
  }

  addItem() {
    if(this.newTaskText) {
      this.todo.makeItem(this.newTaskText)
      this.newTaskText = ''
    }
  }

}
