import { Todo } from '../../src/entities/todo'
import { TodoService } from '../../src/backend/todoService';

describe('TODOs', () => {

  const makeTodo = (title, desc) => {
    const todo = new Todo()
    todo.title = title
    todo.description = desc
    return todo
  }
  const todo1 = makeTodo('todo1', 'description one')
  const todo2 = makeTodo('todo2', 'description two')
  const todo3 = makeTodo('todo3', 'description three')
  let todoSvc;

  beforeEach(() => {
    todoSvc = new TodoService()
    const todos = [todo1, todo2, todo3]
    todos.forEach(todoSvc.add);
  })

  it('should get all todos', () => {
    const todos = todoSvc.getTodos()
    expect(todos).toEqual([todo3, todo2, todo1])
  })

  it('should prevent adding the same todo more than once', () => {
    const todoCountBefore = todoSvc.getTodos().length
    todoSvc.add(todo1)
    todoSvc.add(todo1)

    expect(todoSvc.getTodos().length).toBe(todoCountBefore)
  })

  it('should get a todo by id', () => {
    expect(todoSvc.getTodo(todo1.id)).toEqual(todo1)
  })

  it('should delete a todo by id', () => {
    const deleted = todoSvc.deleteTodo(todo2.id)
    expect(deleted).toEqual(todo2)
    expect(todoSvc.getTodos()).not.toContain(todo2)

    expect(todoSvc.deleteTodo(-1)).toBeUndefined()
  })

  it('should merge todos', () => {
    const todoCountBefore = todoSvc.getTodos().length

    const updatedDescription = 'New description'
    todo1.description = updatedDescription

    todoSvc.merge(todo1)
    const retrievedTodo = todoSvc.getTodo(todo1.id)
    expect(retrievedTodo.description).toBe(updatedDescription)

    const newTodo = makeTodo('new','new todo description')
    todoSvc.merge(newTodo)
    expect(todoSvc.getTodos().length).toBe(todoCountBefore + 1)
    expect(todoSvc.getTodos()).toContain(newTodo)

  })
})


