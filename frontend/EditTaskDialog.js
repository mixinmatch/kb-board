var React = require('react');
import Assignee from './Assignee';
import AssigneeList from './AssigneeList';
import Task from './model/Task';
import './style.scss'

export const EditTaskDialog = (props) => {
    const [title, setTitle] = React.useState(props.task.title)
    const [description, setDescription] = React.useState(props.task.description)
    const [dueDate, setDueDate] = React.useState(props.task.dueDate)

    const onExitChangeHandler = () => {
        const updatedTask = new Task({
            ...props.task,
            title: title,
            description: description,
            dueDate: dueDate
        })

        props.changedTaskHandler(updatedTask)
        props.setPopup(
            prevState => {
                popup: false;
            }
        )
    }

    const onTitleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const onDescChangeHandler = (event) => {
        setDescription(event.target.value)
    }
    const onDateChangeHandler = (event) => {
        setDueDate(event.target.value)
    }

    return (
        <div className="edit-task-dialog">
            <div className="edit-dialog-inner">
                <div className="dialog-title-group">
                    {/* <Title /> */}
                    <div>
                        <input className="task-dialog-title-input" type="text" onChange={onTitleChangeHandler} value={title} />
                    </div>

                    <div className="task-dialog-close" onClick={onExitChangeHandler}></div>
                </div>
                <div style={{ marginLeft: '25px' }}>
                    <span className="due-date-style"> {'Due on: '} </span>
                    <input type="date" className="task-dialog-date-input" value={dueDate} onChange={onDateChangeHandler} />
                </div>
                <textarea onChange={onDescChangeHandler} value={description} className="task-dialog-description-input" placeholder='Description of the task' />
                <div className="task-dialog-assignees">
                    <AssigneeList data={props.task.assignees}  />
                </div>
            </div>
        </div>
    )
}
