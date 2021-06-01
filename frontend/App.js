var React = require('react');
var ReactDOM = require('react-dom');
import AssigneeList from './AssigneeList'
import Board from './Board';
import ProfileCard from './profileCard'
import ProfileList from './profileList'
import BoardOptions from './BoardOptions';
import BoardHeader from './BoardHeader';
import { createNewColumn, createNewBoard, updateColumn, getTasks, getBoard } from './API';
import Task from './model/Task';
import {MColumn} from './model/Column' 

let board = await createNewBoard()
let boardId = board.id
const testProfile = [
    {
        name: "Cavan Foster",
        role: "Supervisor",
        id: boardId
    },
    {
        name: "Josefina Thorburn",
        role: "Scrum",
        id: 999999
    },
    {
        name: "Emerson Nichola",
        role: "Developer",
        id: 9999
    }
]
//Create the columns
const c1 = await createNewColumn(boardId)

const columnsData = [
    c1,
]

// Big board containing tasks and other yet to be defined options
const taskData = [
    // new Task({
    //     id: 1,
    //     title: "Task 1",
    //     description: "Create a new board",
    //     assignees: [{ name: "jack", id: 3 }],
    //     dueDate: '2021-05-03',
    //     columnId: 33
    // }),
    // new Task({
    //     id: 2,
    //     title: "Task 2",
    //     description: "Update new board",
    //     assignees: [{ name: "evans", id: 5 }],
    //     dueDate: '2021-07-03',
    //     columnId: 33
    // }),
    // new Task({
    //     id: 3,
    //     title: "Task 3",
    //     description: "Revise tasks",
    //     assignees: [{ name: "mike", id: 8 }],
    //     dueDate: '2021-04-03',
    //     columnId: 33,
    // }),
    // new Task({
    //     id: 4,
    //     title: "Task 4",
    //     description: "Submit the project to senior developer",
    //     assignees: [{ name: "jack", id: 3 }],
    //     dueDate: '2021-05-07',
    //     columnId: 34
    // }),
]


function App(props) {
    const [tasks, setTasks] = React.useState(taskData)
    const [columns, setColumns] = React.useState(columnsData)

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ProfileList profiles={testProfile} />
                <div style={{ width: "-webkit-fill-available" }}>
                    <BoardHeader />
                    <BoardOptions board={{ id: testProfile[0].id }} setColumns={setColumns}/>
                    <Board tasks={[tasks, setTasks]} columns={[columns, setColumns]}/>
                </div>
            </div>
        </>
    )


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);