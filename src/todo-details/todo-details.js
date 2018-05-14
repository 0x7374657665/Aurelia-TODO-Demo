import { bindable } from "aurelia-templating";
import { TodoService } from "../backend/todoService";
import { inject } from "aurelia-dependency-injection";
import { Router } from "aurelia-router";
import { TodoItem } from "../entities/todoItem";

@inject(TodoService, Router)
export class TodoDetails {

  @bindable todo

  constructor(todoService, router) {
    this.todoService = todoService,
    this.router = router
    this.newTaskText = ''
  }

  activate(params) {
    this.todo = this.todoService.getTodo(params.id)
  }

  addItem() {
    if(this.newTaskText) {
      this.todo.makeItem(this.newTaskText)
      this.newTaskText = ''
    }
  }

}
