import Column from './Column';
import { MColumn } from './model/Column';

var React = require('react');

class BoardOptions extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board-options">
                <ExtraMenuButton/>
            </div>
        )
    }
}

const addNewColumnHandler = () => {
    props.setColumn(
        prevState => {
            //new column
            // let newColumn = new MColumn
            return [...prevState, newColumn]
        }
    )

}

const ExtraMenuButton = (props) => (
    <button className="options-button" onClick={addNewColumnHandler}>
    </button>
)

export default BoardOptions