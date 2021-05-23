var React = require('react');
var ReactDOM = require('react-dom');
import AssigneeList from './AssigneeList'
import Board from './Board';
import ProfileCard from './profileCard'
import ProfileList from './profileList'
import TaskCard from './TaskCard'
import TaskColumn from './TaskColumn'

const testProfile = [
    {
        name: "Cavan Foster",
        role: "Supervisor" 
    },
    {
        name: "Josefina Thorburn",
        role: "Scrum"
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
        <ProfileList />
        {/* TODO add the cards to ProfileList */}
            <ProfileCard name={testProfile[0].name} role={testProfile[0].role}/>
            <ProfileCard name={testProfile[1].name} role={testProfile[1].role}/>
            <ProfileCard name={testProfile[2].name} role={testProfile[2].role}/>
        </>
        )
    }


}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);