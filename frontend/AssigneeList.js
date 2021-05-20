var React = require('react');
import Assignee from './Assignee'

const AssigneeList = (props) => (
    <div>
    {props.data.map(a => <Assignee key={a.name} {...a}/>)}
    </div>
)

export default AssigneeList