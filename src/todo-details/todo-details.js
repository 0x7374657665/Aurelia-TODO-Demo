import { bindable } from "aurelia-templating";
import { TodoService } from "../backend/todoService";
import { inject } from "aurelia-dependency-injection";
import { Router } from "aurelia-router";

@inject(TodoService, Router)
export class TodoDetails {

  @bindable todo

  constructor(todoService, router) {
    this.todoService = todoService,
    this.router = router
  }

  activate(params) {
    console.log('activating:',params)
    this.todo = this.todoService.getTodo(params.id)
    console.log('todo retrieved:',this.todo)
  }

}
