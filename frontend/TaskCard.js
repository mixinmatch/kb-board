var React = require('react');
var ReactDOM = require('react-dom');
import AssigneeList from './AssigneeList'

class TaskCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { taskCompleted: false }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = function (e) {
        this.setState(state => ({
            taskCompleted: !this.state.taskCompleted
        }))
    }

    render() {
        const task = this.props
        const dueDate = "1 jan"

        return (
            <>
                <div className="task-card" style={{ opacity: this.state.taskCompleted ? 0.5 : 1 }}>
                    <TaskCompletedButton taskCompleted={this.state.taskCompleted} clickHandler={this.handleClick} />
                    <span className="task-title">{task.title}</span>
                    <div style={{ paddingTop: "15px", display: "flex" }}>
                        <AssigneeList data={task.assignees} />
                        <Date date={dueDate} pastDeadline={false} />
                    </div>
                </div>
            </>
        )
    }
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