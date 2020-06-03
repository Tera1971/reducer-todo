import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: "add an item"
        };
    }

    handleChanges = event => {
        
        this.setState({ [event.target.name]: event.target.value });
    };

    submitItem = event => {
        event.preventDefault();
        this.setState({ task: "add another item" });
        this.props.addTodo(event, this.state.task);
    };

    render() {
        return (
            <div className='todoform'>
                <form onSubmit={this.submitItem}>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChanges}
                    />
                    <button className='add-task'>Add new task</button>
                </form>
                <button className='clear-button' onClick={this.props.clearCompleted}>
                    Complete
                </button>
            </div>
        )
    }
}

export default TodoForm;