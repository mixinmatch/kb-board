var React = require('react');
var ReactDOM = require('react-dom');
import ProfileCard from './profileCard'

const testProfile = [
    {
        name: "Cavan Foster",
        role: "Supervisor"
    },
    {
        name: "Josefina Thorburn",
        role: "Scrum Master"
    },
    {
        name: "Emerson Nichola",
        role: "Developer"
    }
]

class App extends React.Component {

    render() {
        return(
        <>
            <ProfileCard name={testProfile[0].name} role={testProfile[0].role}/>
            <ProfileCard name={testProfile[1].name} role={testProfile[1].role}/>
            <ProfileCard name={testProfile[2].name} role={testProfile[2].role}/>
            </>
        )
    }


}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);