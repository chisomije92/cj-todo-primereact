
export class TasksService {
  getTasks() {
    return fetch('https://heartbreaking-linen-angora.glitch.me/todos?_sort=id&_order=desc')
      .then(res => res.json())
  }

  deleteTask(id: number) {
    fetch(`https://heartbreaking-linen-angora.glitch.me/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
  }

  createTask(task: any) {
    return fetch('https://heartbreaking-linen-angora.glitch.me/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...task
      })
    })
      .then(res => res.json())
  }
}