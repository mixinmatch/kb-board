var React = require('react');
import TaskCard from './TaskCard'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Constants'

function Column({tasks, column, setTasks}) {

    const [{canDrop, isOver}, drop] = useDrop(
        {
            accept: ItemTypes.TASK,
            drop: () => ({ columnId: column.id, columnName: column.name}),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }
    )

    return (
        <div className="column" ref={drop}>
            <h2 className="columnHeader">{column.name}</h2>
            {tasks.map((t, index) => <TaskCard key={t.id} index={index} task={t} setTasks={setTasks}/>)}
        </div>
    )

}


export default Column