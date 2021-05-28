import Column from './Column';
import { MColumn } from './model/Column';
import { createNewColumn } from './API';

var React = require('react');

class BoardOptions extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board-options">
                <ExtraMenuButton {...this.props} />
            </div>
        )
    }
}

const ExtraMenuButton = (props) => {

    const addNewColumnHandler = async () => {
        let newColumn = await createNewColumn(props.board.id)
        console.log(newColumn)
        props.setColumns(
            prevState => {
                let newModelColumn = new MColumn({id: newColumn.id, name: 'untitled column'})
                return [...prevState, newModelColumn]
            }
        )

    }

    return (
        <button className="options-button" onClick={addNewColumnHandler}>
        </button>
    )
}

export default BoardOptions