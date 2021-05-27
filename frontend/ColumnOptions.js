var React = require('react');
import Task from './model/Task';

export default function ColumnOptions({columnId, setTasks, setColumns}) {

    const addTaskHandler = () => {
        setTasks(prevState => {
            //Call to backend with new taskId TODO
            let taskId = 0
            return [...prevState, new Task({columnId: columnId, id: taskId})]
        })
    }

    const removeColumnHander = () => {
        setColumns(
            prevState => {
                if(prevState.length == 1) {
                    return [...prevState]
                }
                return prevState.filter(c => c.id != columnId) //todo make call to backend
            }
        )

    }

    return (
        <div>
            <button className="column-options-button-plus" onClick={addTaskHandler}>
            </button>
            <button className="column-options-button-triple-dots" onClick={removeColumnHander}>
            </button>
        </div>
    )
}