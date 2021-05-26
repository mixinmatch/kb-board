var React = require('react');

class BoardOptions extends React.Component {

    render() {
        return (
            <div className="board-options">
                <ExtraMenuButton/>
            </div>
        )
    }
}

const ExtraMenuButton = (props) => (
    <button className="options-button">
        <img src="./assets/tripledots.png" height="50%" />
    </button>
)

export default BoardOptions