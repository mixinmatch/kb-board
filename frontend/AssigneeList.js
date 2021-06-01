var React = require('react');
import Assignee from './Assignee'

const AssigneeList = (props) => (
    <>
    {props.data.map(a => <Assignee key={a.id} {...a}/>)}
    </>
)

export default AssigneeList