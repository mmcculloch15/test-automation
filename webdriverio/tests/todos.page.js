class TodosPage {

  get newTodoInput() {
    return $('.new-todo')
  }

  get todoItems() {
    return $$('[qa-id=todo-item')
  }

  get todoCount() {
    return $('.todo-count')
  }

  addNewTodo(text) {
    this.newTodoInput.setValue(text + "\uE007")
  }

}

export const todosPage = new TodosPage()