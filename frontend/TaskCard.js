var React = require('react');
var ReactDOM = require('react-dom');
import AssigneeList from './AssigneeList'

class TaskCard extends React.Component {
    render() {
        const taskTitle = this.props.title
        const assignees = this.props.assignees
        const dueDate = "1 jan"

        return (
            <>
            <div className="task-card">
                <input type="checkbox" />
                <span className="task-title">{taskTitle}</span>
                <div style={{paddingTop: "20px", display: "flex"}}>
                <AssigneeList data={assignees}/>
                <Date date={dueDate} pastDeadline={true}/>
                </div>

            </div>
            </>
        )
    }
}

export default TaskCard

const Date = (props) => (
    <div style={{color : props.pastDeadline ? "red" : "black", marginTop:"auto", marginBottom: "auto", paddingLeft: "5px"}}>
        {props.date}
    </div>
)