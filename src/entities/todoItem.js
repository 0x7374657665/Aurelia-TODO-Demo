import { Sequence } from "../resources/sequences/sequence";

export class TodoItem {

  constructor(task) {
    this.id = Sequence.next()
    this.task = task
    this.done = false
  }
}
