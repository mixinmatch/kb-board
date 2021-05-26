var React = require('react');
var ReactDOM = require('react-dom');
import AssigneeList from './AssigneeList'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

function TaskCard({ task, setTasks }) {
    const [taskCompleted, setTaskCompleted] = React.useState(false)

    const handleClick = () => { setTaskCompleted(!taskCompleted) }
    const dueDate = "1 jan"

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

    return (
        <div className="task-card" style={{ opacity: (taskCompleted || isDragging) ? 0.5 : 1 }}
            ref={drag}>
            <TaskCompletedButton taskCompleted={taskCompleted} clickHandler={handleClick} />
            <span className="task-title">{task.title}</span>
            <div style={{ paddingTop: "15px", display: "flex" }}>
                <AssigneeList data={task.assignees} />
                <Date date={dueDate} pastDeadline={false} />
            </div>
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