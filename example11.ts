// a more complex data interface representing nuslit
import * as http from 'http'
import { v4 as uuidv4 } from 'uuid'
import fetch from 'node-fetch'
import axios from 'axios';


interface Task {
    id:string
    title: string
    completed: boolean
}

// task database (mock)
const tasks: Task[] = [
    { id: uuidv4(), title: 'Task 1', completed: false},
    { id: uuidv4(), title: 'Task 2', completed: true }

]

// http server
const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if(url === "/tasks" && method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify(tasks))
    } else if (url === '/tasks' && method === 'POST') {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const task: Task = JSON.parse(body)
            tasks.push({...task, id: uuidv4() })
            res.writeHead(201)
            res.end()
        })
    } else if (url && url.startsWith('/tasks/') && method === 'DELETE') {
        const id = url.split('/')[2]
        const taskIndex = tasks.findIndex(t => t.id === id)
        if(taskIndex > -1) {
            tasks.splice(taskIndex, 1)
            res.writeHead(200)
            res.end()
        }
    } else {
        res.writeHead(404)
        res.end()
    }
})


// put request
server.on('request', (req, res) =>  {
    const url = req.url
    const method = req.method

    if(url.startsWith("/tasks/") && method === 'PUT') {
        const id = url.split('/')[2]
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const updatedTask = JSON.parse(body)
            const taskIndex = tasks.findIndex(t => t.id === id)

            if(taskIndex > -1) {
                const updatedTask = JSON.parse(body)
                const taskIndex = tasks.findIndex(t => t.id === id)
                if(taskIndex > -1) {
                    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask}
                    res.writeHead(200)
                    res.end()
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json'})
                    res.end('Task not found')
                }
            }
        })
    }



})

server.listen(4000, () => {
    console.log('server running on port 4000')
})

// front end component
class TaskComponent {
    private url: string

    constructor(url: string) {
        this.url = url
    }

    async getTasks(): Promise<Task[]> {
        const response = await fetch(this.url)
        // const response = await axios.get(this.url)
        return (await response.json()) as Task[]
        // return response.data
    }

    async getTask(): Promise<Task[]> {
        const reponse = await fetch(this.url)
        console.log(await reponse.json()[1]) as unknown as Task[]
        console.log(tasks[1])
        return tasks

    }

    async addTask(title: string, completed: boolean): Promise <void> {
        const newTask = { title, completed }
        await fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newTask)
        })
    }

    async deleteTask(id:string): Promise<void> {
        await fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
    }

    async displayTasks() {
        const tasks = await this.getTasks()
        console.log('Tasks: ', tasks)
    }


    async updateTask(id: string, title: string, completed: boolean): Promise<void> {
        const updatedTask = { title, completed }
        await fetch(`${this.url}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(updatedTask)
        })


    }
}

async function main() {
    const component = new TaskComponent('http://localhost:4000/tasks')

    // console.log('Initial tasks')
    // await component.getTask()

    // console.log("adding a new task")
    // await component.addTask("New task", false)
    // await component.displayTasks()

    // retrieve tasks to get an ID for selection
    // const tasks = await component.getTasks()
    // if(tasks.length > 0) {
    //     console.log("Deleting a task")
    //     await component.deleteTask(tasks[0].id)
    //     await component.displayTasks()
    // }

    // update a task
    // console.log("updating a task")
    // await component.updateTask("38892f8b-60a2-439e-93de-030768d6737c", "Updated Task", true)
    // await component.displayTasks()
}

main()

