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


// function updateTask(recentTask){}
// function deleteTask(task){}

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
// function updateColumn(recentColumn){}
// function deleteColumn(column){}

// function getTasks(){}


