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
  }

  activate(params) {
    this.todo = this.todoService.getTodo(params.id)
  }

}
