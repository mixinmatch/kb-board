var React = require('react');
import {MColumn} from './model/Column';
import './style.scss'

export const EditColumnDialog = (props) => {
    const [name, setName] = React.useState(props.column.name)

    const onExitChangeHandler = () => {
        const updatedColumn = new MColumn({
            ...props.column,
            name: name,
        })

        props.updateBoardColumn(updatedColumn)
        props.closePopup()
    }

    const onNameChangeHandler = (event) => {
        setName(event.target.value)
    }

    return (
        <div className="edit-task-dialog">
            <div className="edit-dialog-inner">
                <div className="task-dialog-close" onClick={onExitChangeHandler} style={{ marginLeft: '665px' }}></div>
                <div className="column-edit-dialog-edit-name">
                    <span className="column-edit-dialog-edit-name-font">Enter new name for the column.</span>
                    <div>
                        <input type="text" onChange={onNameChangeHandler} className="column-edit-dialog-name-input" />
                    </div>
                </div>
            </div>
        </div>
    )
}
