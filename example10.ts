// mock data interface

interface Task {
    id: string
    title: string
    completed: boolean
}

// mock backend api
class MockApi {
    private tasks: Task[] = [
        { id: '1', title: 'Task 1', completed: false},
        { id: '2', title: 'Task 2', completed: true }
    ]

    getTasks(): Promise<Task[]> {
        return Promise.resolve(this.tasks)
    }

    addTask(task: Task): Promise<Task> {
        this.tasks.push(task)
        return Promise.resolve(task)
    }

    deleteTask(id: string): Promise<void> {
        this.tasks = this.tasks.filter(tasks => tasks.id !== id)
        return Promise.resolve()
    }

}

class TaskStore {
    private api: MockApi
    private tasks: Task[] = []

    constructor(api: MockApi) {
        this.api = api
    }

    async fetchTasks() {
        this.tasks = await this.api.getTasks()
    }

    async addTask(task: Task) {
        await this.api.addTask(task)
        await this.fetchTasks()
    }

    async deleteTask(id: string) {
        await this.api.deleteTask(id)
        await this.fetchTasks()
    }

    getTasks(): Task[] {
        return this.tasks
    }
}


class TaskComponent {
    private store: TaskStore

    constructor(store: TaskStore) {
        this.store = store
    }

    async displayTasks() {
        await this.store.fetchTasks()
        console.log("")
    }

    async addTask(task: Task) {
        await this.store.addTask(task)
        console.log("Task added: ", task)
        await this.displayTasks()
    }

    async deleteTask(id: string) {
        await this.store.deleteTask(id)
        console.log("Task deleted:", id)
        await this.displayTasks()
    }


}

// main
async function main() {
    const api = new MockApi()
    const store = new TaskStore(api)
    const component = new TaskComponent(store)

    // await component.displayTasks()
    await component.addTask({ id: '3', title: 'Task 3', completed: false})
    // await component.deleteTask('1')
    await component.addTask({id: '4', title: 'Task 4', completed: true})
    await component.displayTasks()

    // console.log(component.displayTasks())
}


main()