import { StageComponent } from "aurelia-testing";
import { Todo } from "../../../src/entities/todo";
import { bootstrap } from "aurelia-bootstrapper";

describe('Todo Card', () => {
  let card
  const todoTitle = 'My Test TODO'
  const todoDescription = 'Description of my todo'

  beforeEach(() => {
    card = StageComponent
    .withResources('./resources/elements/todo-card/todo-card')
    .inView('<todo-card todo.bind="todo"></todo-card>')
    .boundTo({todo: new Todo(todoTitle,todoDescription)})
  })

  it('should initialize todo card with title and description', done => {
    card.create(bootstrap).then(() => {
      const observedTitle = document.querySelector('.todo-title').textContent
      const observedDescription = document.querySelector('.todo-description').textContent
      expect(observedTitle).toBe(todoTitle)
      done()
    })
  })
})
