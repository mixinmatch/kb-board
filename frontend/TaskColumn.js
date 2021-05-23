var React = require('react');
import TaskCard from './TaskCard'

class TaskColumn extends React.Component {
    render() {
        const column = this.props.column
        return (
            <>
            <div>
                {column.name} 
            </div>
            
            {this.props.tasks.map((t, index) => <TaskCard key={t.id} {...t} index={index}/>)}
        </>
        )
    }
}


export default TaskColumn