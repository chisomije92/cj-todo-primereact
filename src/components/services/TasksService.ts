
export class TasksService {
  getTasks() {
    return fetch('https://dummyjson.com/todos?limit=3')
      .then(res => res.json())
  }
}