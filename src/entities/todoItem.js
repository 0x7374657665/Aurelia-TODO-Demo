import { Sequence } from "../resources/sequences/sequence";

export class TodoItem {

  constructor(task) {
    this.id = Sequence.next()
    this.parentTodoId = -1
    this.task = task
    this.done = false
  }
}
