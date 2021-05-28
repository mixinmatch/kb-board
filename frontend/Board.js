var React = require('react');
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Column from './Column'

function Board(props) {
    const [tasks, setTasks] = props.tasks
    const [columns, setColumns] = props.columns

    const tasksFilteredByColumnId = (() => {
        let res = []

        for(let column of columns) {
            let tasksFiltered = tasks.filter(t => t.columnId === column.id)
            res = [...res, <Column key={column.id} column={columns.find(c => c.id === column.id)} tasks={tasksFiltered} setTasks={setTasks} setColumns={setColumns}/>]
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