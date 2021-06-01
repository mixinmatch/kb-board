var React = require('react');
import TaskCard from './TaskCard'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Constants'
import ColumnOptions from './ColumnOptions'
import {EditColumnDialog} from './EditColumnDialog'

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
    const [popup, setPopup] = React.useState(false)

    const closePopup = () => {
        setPopup(false)
    }

    const updateBoardColumn = (newColumn) => {
        setColumns(prevState => {
            return prevState.map(t => {
                return t.id === newColumn.id ? newColumn : t
            })
        })
    }

    return (
        <>
        <div className="column" ref={drop}>
            <div className="columnHeaderContainer">
                <div className="columnHeader" onClick={() => {setPopup({popup: !popup})} }>{column.name}</div>
                <ColumnOptions columnId={column.id} setTasks={setTasks} setColumns={setColumns}/>
            </div>
            {tasks.map((t, index) => <TaskCard key={t.id} index={index} task={t} setTasks={setTasks} />)}
        </div>
        {popup ? <EditColumnDialog column={column} closePopup={closePopup} updateBoardColumn={updateBoardColumn}/> : null}
        </>
    )

}


export default Column