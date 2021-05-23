var React = require('react');
var ReactDOM = require('react-dom');
import TaskColumn from './TaskColumn'

// Big board containing tasks and other yet to be defined options
const taskData = [
    {
        id: 1,
        title: "test1",
        assignees: [{name: "jack", id: 3}]
    },
    {
        id: 2,
        title: "test2",
        assignees: [{name: "evans", id: 5}]
    },
    {
        id: 3,
        title: "test3",
        assignees: [{name: "mike", id: 8}]
    }
]
 
class Board extends React.Component {
    render() {
        const taskLists = this.props.taskLists
        return (
                <TaskColumn tasks={taskData} column={{name: "test column", id:"31"}}/>
        )
    }
}



export default Board