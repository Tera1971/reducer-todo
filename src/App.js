import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



const todo = [
  {
    task: 'plan design',
    id: 1,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  submitItem = e => {
    e.preventDefault();
    this.setState({ item: '' });
    this.props.addItem(e, this.state.item);
  };


  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}


export default App;