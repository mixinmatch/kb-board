var React = require('react');
var ReactDOM = require('react-dom');
import AssigneeList from './AssigneeList'
import Board from './Board';
import ProfileCard from './profileCard'
import ProfileList from './profileList'
import BoardOptions from './BoardOptions';
import BoardHeader from './BoardHeader';

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
        return (
            <>
                <div style={{ display: 'flex' , flexDirection: 'row'}}>
                    <ProfileList profiles={testProfile}/>
                    <div style={{width: "-webkit-fill-available"}}>
                        <BoardHeader />
                        <BoardOptions />
                        <Board />
                    </div>
                </div>
            </>
        )
    }


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);