import { todosPage } from './todos.page'
import * as todos from '../../cypress/fixtures/activeTodos.json'

describe('Todos tests', () => {

  beforeEach(() => {
    browser.execute((todos) => {
      fetch('/api/todos/bulkload', {
        method: 'POST',
        body: { todos: todos },
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }, todos)
  })

  it('display an input box', () => {
    browser.url('/')
    console.log(todosPage.newTodoInput)
    todosPage.newTodoInput.waitForDisplayed()
    todosPage.addNewTodo('Something')
  })
})