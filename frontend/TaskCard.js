var React = require('react');
var ReactDOM = require('react-dom');
import AssigneeList from './AssigneeList'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'
import { EditTaskDialog } from './EditTaskDialog'

function TaskCard({ task, setTasks }) {
    const [taskCompleted, setTaskCompleted] = React.useState(false)
    const [popup, setPopup] = React.useState(false)

    const handleClick = () => { setTaskCompleted(!taskCompleted) }

    const { id, columnId } = { ...task }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TASK,
        item: { id, columnId },

        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                setTasks((prevState) => {
                    return prevState.map(t => {
                        return {
                            ...t,
                            columnId: t.id === item.id ? dropResult.columnId : t.columnId
                        }
                    }
                    )
                })
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    const clickCardHandler = () => {
        setPopup(
            prevState => ({
                popup: !popup
            })
        )
    }

    const changedTaskHandler = (savedTask) => {
        setTasks(prevState => {
            return prevState.map(t => {
                return t.id === savedTask.id ? savedTask : t
            }
            )
        })
    }


    return (
        <div className="task-card" style={{ opacity: (taskCompleted || isDragging) ? 0.5 : 1 }}
            ref={drag}>
            <TaskCompletedButton taskCompleted={taskCompleted} clickHandler={handleClick} />
            <span className="task-title" onClick={clickCardHandler}>{task.title}</span>
            <div style={{ paddingTop: "15px", display: "flex" }} onClick={clickCardHandler}>
                <AssigneeList data={task.assignees} />
                <Date date={task.dueDate} pastDeadline={false} />
            </div>
            {popup ? <EditTaskDialog task={task} changedTaskHandler={changedTaskHandler} setPopup={setPopup} /> : null}
        </div>
    )

}

export default TaskCard

const Date = (props) => (
    <div style={{ color: props.pastDeadline ? "red" : "grey", marginTop: "auto", marginBottom: "auto", paddingLeft: "5px" }}>
        {props.date}
    </div>
)

class TaskCompletedButton extends React.Component {
    render() {
        let image = ""
        if (this.props.taskCompleted) {
            image = "complete.png"
        } else {
            image = "completeNo.png"
        }
        const pathIcon = "./assets/" + image

        return (
            <img onClick={this.props.clickHandler} src={pathIcon} style={{ height: "20px", width: "20px", marginTop: "auto", marginBottom: "auto" }} />
        )
    }
}