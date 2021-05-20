var React = require('react');

class BoardOptions extends React.Component {

    render() {
        return (
            <div>
                <AddBoardButton />
            </div>
        )
    }
}

const AddBoardButton = (props) => (
    <button>Add new board</button>
)

export default BoardOptions