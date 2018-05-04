import { inject } from "aurelia-dependency-injection";
import { Todo } from "../../../entities/todo";
import { bindable } from "aurelia-templating";

export class TodoCard {

  @bindable todo

  goToDetails() {
    console.log(`navigating to todo/${this.todo.id}`)
  }

}
