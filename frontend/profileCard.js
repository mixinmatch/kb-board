var React = require('react');
var ReactDOM = require('react-dom');
import './dist/output.css'
class ProfileCard extends React.Component {

    render() {
        return (
                <div>
                    <span className="dot-admin">
                    </span>
                    <div className="name">
                        {this.props.name}
                    </div>
                    <div className="role">
                        {this.props.role}
                    </div>
                </div>
        )
    }
}


export default ProfileCard