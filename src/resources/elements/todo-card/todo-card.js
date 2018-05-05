import { inject } from "aurelia-dependency-injection";
import { Todo } from "../../../entities/todo";
import { bindable } from "aurelia-templating";
import { Router } from "aurelia-router";

@inject(Router)
export class TodoCard {

  @bindable todo

  constructor(router) {
    this.router = router
  }

  goToDetails() {
    this.router.navigateToRoute('todo',{id: this.todo.id})
  }

}
