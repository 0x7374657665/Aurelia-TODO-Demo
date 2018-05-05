import { inject } from "aurelia-dependency-injection";
import { EventAggregator } from "aurelia-event-aggregator";

let _todos = []

const getIndexOf = todo => _todos.map(t => t.id).indexOf(todo.id)

@inject(EventAggregator)
export class TodoService {

  constructor(events) {
    _todos = []
    this.events = events
    this.events.subscribe('todo:create', newTodo => {
      this.add(newTodo)
    })
  }

  add(todo) {
    if (!_todos.find(t => t.id === todo.id)) {
      _todos.unshift(todo)
      this.events.publish('todo:added', todo)
    }
  }

  getTodos() {
    return _todos
  }

  getTodo(id) {
    return _todos.find(todo => todo.id == id) // id might be string: e.g. '5'
  }

  deleteTodo(id) {
    const targetIndex = _todos.map(todo => todo.id).indexOf(id)
    if (targetIndex > -1)
      return _todos.splice(targetIndex, 1)[0]
  }

  merge(todo) {
    const targetIndex = getIndexOf(todo)
    if (targetIndex === -1) {
      this.add(todo)
    } else {
      _todos[targetIndex] = todo
    }
  }
}
