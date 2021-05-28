var React = require('react');
import Task from './model/Task';
import { createNewTask } from './API'

export default function ColumnOptions({ columnId, setTasks, setColumns }) {

    const addTaskHandler = async () => {
        let t = await createNewTask()
        let taskId = t.id
        setTasks(prevState => {
            return [...prevState, new Task({ columnId: columnId, id: taskId })]
        })
    }

    const removeColumnHander = () => {
        setColumns(
            prevState => {
                if (prevState.length == 1) {
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