import "core-js/stable";
import "regenerator-runtime/runtime";

const server = ""
const testServer = "http://localhost:8080"

export const createNewTask = async () => {
    const path = `${testServer}/task/new`
    const resp = await fetch(path, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const task = await resp.json()
    
    return task
}


export const updateTask = async (boardId, recentTask) => {
    const path = `${testServer}/board/${boardId}/task/${recentTask.id}`
    const resp = await fetch(path, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recentTask)
    })
    const task = await resp.json()

    return task
}

// export const deleteTask = async (task) => {}

export const createNewColumn = async (id) => {
    const path = `${testServer}/board/${id}/column/new`
    const resp = await fetch(path, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const column = await resp.json()
    return column
}

export const createNewBoard = async () => {
    const path = `${testServer}/board/new`
    const resp = await fetch(path, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const board = await resp.json()

    return board
}
export const updateColumn = async (boardId, recentColumn) => {
    const path = `${testServer}/board/${boardId}/column/${recentColumn.id}`
    const resp = await fetch(path, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            name: recentColumn.name
        }
    })
    const column = await resp.json()
    return column
}
// function deleteColumn(column){}

export const getTasks = async (boardId) => {
    const path = `${testServer}/board/${boardId}/tasks`
    const resp = await fetch(path, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const tasks = await resp.json()

    return tasks
}

export const getBoard = async (boardId) => {
    const path = `${testServer}/board/${boardId}`
    const resp = await fetch(path, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const board = await resp.json()
    console.log(board)
    return board
}