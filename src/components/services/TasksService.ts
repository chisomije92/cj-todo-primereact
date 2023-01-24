
export class TasksService {
  getTasks() {
    return fetch('http://localhost:3003/todos?_sort=id&_order=desc')
      .then(res => res.json())
  }

  deleteTask(id: number) {
    fetch(`http://localhost:3003/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
  }

  replaceTasks(tasks: any) {
    return fetch('http://localhost:3003/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...tasks
      })
    }).then(res => res.json())
  }

  createTask(task: any) {
    return fetch('http://localhost:3003/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...task
      })
    })
      .then(res => res.json())
  }
}