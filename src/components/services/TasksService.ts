
export class TasksService {

  getTasks() {
    return fetch('https://todo-jsondb.onrender.com/todos?_sort=id&_order=desc')
      .then(res => res.json())
  }

  deleteTask(id: number) {
    fetch(`https://todo-jsondb.onrender.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
  }

  createTask(task: any) {
    return fetch('https://todo-jsondb.onrender.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...task
      })
    })
      .then(res => res.json())
  }
}