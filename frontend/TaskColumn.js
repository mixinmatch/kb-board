var React = require('react');


class TaskColumn extends React.Component {
    render() {
        const columnName = this.props.columnName
        const tasks = this.props.tasks
        return (
            <>
            <div>
                {columnName} 
            </div>
            <div>
                {/* {this.props.map(t => <Task/>)} */}
            </div>
            </>
        )
    }
}


export default TaskColumn