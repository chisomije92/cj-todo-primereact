
export class TasksService {
  getTasks() {
    return fetch('https://my-json-server.typicode.com/chisomije92/cj-todo-primereact/todos?_sort=id&_order=desc')
      .then(res => res.json())
  }

  deleteTask(id: number) {
    fetch(`https://my-json-server.typicode.com/chisomije92/cj-todo-primereact/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
  }

  createTask(task: any) {
    return fetch('https://my-json-server.typicode.com/chisomije92/cj-todo-primereact/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...task
      })
    })
      .then(res => res.json())
  }
}