var React = require('react');
var ReactDOM = require('react-dom');
import AssigneeList from './AssigneeList'
import Board from './Board';
import ProfileCard from './profileCard'
import ProfileList from './profileList'
import Column from './Column'

const testProfile = [
    {
        name: "Cavan Foster",
        role: "Supervisor",
        id: 1
    },
    {
        name: "Josefina Thorburn",
        role: "Scrum",
        id: 2
    },
    {
        name: "Emerson Nichola",
        role: "Developer",
        id: 3
    }
]

class App extends React.Component {

    render() {
        return(
        <>
        <ProfileList {...testProfile}/>
        {/* TODO add the cards to ProfileList
            <ProfileCard name={testProfile[0].name} role={testProfile[0].role}/>
            <ProfileCard name={testProfile[1].name} role={testProfile[1].role}/>
            <ProfileCard name={testProfile[2].name} role={testProfile[2].role}/> */}
        </>
        )
    }


}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);