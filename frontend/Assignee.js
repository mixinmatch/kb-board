var React = require('react');


class Assignee extends React.Component {

    render() {
        const assignee = this.props
        const firstNameFirstTwoLetters = assignee.name.substring(0,2)
        const assigneeColor = assignee.color //todo color thing

        return(
            <>
            <span className="assignee-circle">
                {firstNameFirstTwoLetters.charAt(0).toUpperCase() + firstNameFirstTwoLetters.slice(1)}
            </span>
            </>
        )
    }
}

export default Assignee;