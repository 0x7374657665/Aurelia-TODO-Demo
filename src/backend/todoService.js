let _todos = []

const getIndexOf = todo => _todos.map(t => t.id).indexOf(todo.id)

export class TodoService {

  constructor() {
    _todos = []
  }
  
  add(todo) {
    if(!_todos.find(t => t.id === todo.id))
    _todos.unshift(todo)
  }

  getTodos() {
    return _todos
  }

  getTodo(id) {
    return _todos.find(todo => todo.id === id)
  }

  deleteTodo(id) {
    const targetIndex = _todos.map(todo => todo.id).indexOf(id)
    if(targetIndex > -1)
      return _todos.splice(targetIndex,1)[0]
  }

  merge(todo) {
    const targetIndex = getIndexOf(todo)
    if(targetIndex === -1) {
      this.add(todo)
    } else {
      _todos[targetIndex] = todo
    }
  }
}
