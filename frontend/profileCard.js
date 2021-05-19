var React = require('react');
var ReactDOM = require('react-dom');
import './style.scss'

class ProfileCard extends React.Component {

    render() {
        return (
            <div className="card" >
                <div className="dot-box">
                    <div className={"dot-" + this.props.role.toLowerCase()}>
                    </div>
                </div>

                <div>
                    <div>
                        {this.props.name}
                    </div>
                    <div>
                        {this.props.role}
                    </div>
                </div>
            </div>
        )
    }
}


export default ProfileCard