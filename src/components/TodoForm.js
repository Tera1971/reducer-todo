import React, { Component } from 'react';
import Todo from './Todo';
import TodoList from './TodoList'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = { 
            Task: ''
    };
}

handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value  });
};

submitItem = e => {
    e.preventDefault();
    this.setState({ Task: '' });
    this.props.addTodo(e, this.state.Task);
};
 
render() {
    console.log('rendering form');
    return (
        <form onSubmit={this.submitItem}>
            <input
            type="text"
            value={this.state.Task}
            name="Task"
            onChange={this.handleChanges}
            />
          <button>Add Task</button>  
        </form>
        );
    }
}

export default TodoForm;
