var React = require('react');
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Column from './Column'

// Big board containing tasks and other yet to be defined options
const taskData = [
    {
        id: 1,
        title: "test1",
        assignees: [{ name: "jack", id: 3 }],
        columnId: 33
    },
    {
        id: 2,
        title: "test2",
        assignees: [{ name: "evans", id: 5 }],
        columnId: 33
    },
    {
        id: 3,
        title: "test3",
        assignees: [{ name: "mike", id: 8 }],
        columnId: 33
    },
    {
        id: 4,
        title: "test1",
        assignees: [{ name: "jack", id: 3 }],
        columnId: 34
    },
]

const columnsData = [
    { name: "test column", id: 33 },
    { name: "test column2", id: 34 }
]

function Board() {
    const [tasks, setTasks] = React.useState(taskData)

    const tasksFilteredByColumnId = (() => {
        let res = []

        for(let column of columnsData) {
            let tasksFiltered = tasks.filter(t => t.columnId === column.id)
            res = [...res, <Column key={column.id} column={columnsData.find(c => c.id === column.id)} tasks={tasksFiltered} setTasks={setTasks}/>]
        }
        return res
    })()

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="container">
                {tasksFilteredByColumnId}
            </div>
        </DndProvider>
    )
}



export default Board