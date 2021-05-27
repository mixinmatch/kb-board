var React = require('react');
import TaskCard from './TaskCard'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Constants'
import ColumnOptions from './ColumnOptions'

function Column({ tasks, column, setTasks, setColumns }) {

    const [{ canDrop, isOver }, drop] = useDrop(
        {
            accept: ItemTypes.TASK,
            drop: () => ({ columnId: column.id, columnName: column.name }),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }
    )

    return (
        <div className="column" ref={drop}>
            <div className="columnHeaderContainer">
                <div className="columnHeader">{column.name}</div>
                <ColumnOptions columnId={column.id} setTasks={setTasks} setColumns={setColumns}/>
            </div>
            {tasks.map((t, index) => <TaskCard key={t.id} index={index} task={t} setTasks={setTasks} />)}
        </div>
    )

}


export default Column