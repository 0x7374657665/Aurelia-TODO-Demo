export default [
  {
    name: 'todos',
    route: ['', 'todos'],
    moduleId: 'todos/todos',
    title: 'All TODOs'
  },
  {
    name: 'todo',
    route: 'todo/:id',
    moduleId: 'todo/todo',
    title: 'TODO'
  }
]
