import { todosPage as TodosPage } from './todos.page'
import * as todos from '../../cypress/fixtures/activeTodos.json'
const assert = require('assert')

describe('Smoke tests', () => {
	beforeEach(() => {
		browser.url('/')

		const body = { todos: todos.default }
		browser.execute(body => {
			fetch('/api/todos/bulkload', {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				},
			})
		}, body)

		browser.refresh()
		browser.waitUntil(
			() => TodosPage.todoItems.length === body.todos.length,
			10000,
			'FAIL: Todo data was not loaded successfully'
		)
	})

	it('should be able to add a new todo', () => {
		TodosPage.newTodoInput.waitForDisplayed()
		let initialTodosCount = TodosPage.todoItems.length
		TodosPage.addNewTodo('Something else')
		browser.waitUntil(
			() => {
				return TodosPage.todoItems.length > initialTodosCount
			},
			10000,
			'FAIL: The todo was not added'
		)
	})
})
