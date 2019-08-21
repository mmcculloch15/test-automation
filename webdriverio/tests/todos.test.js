import { todosPage } from './todos.page'

describe('Todos tests', () => {

  it('display an input box', () => {
    browser.url('/')
    console.log(todosPage.newTodoInput)
    todosPage.newTodoInput.waitForDisplayed()
    browser.pause(5000)
  })
})