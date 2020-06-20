import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



const Todo = [
  {
    Todo: 'Make Bed',
    id: 2345678,
    completed: false
  },
  {
    Todo: 'Laundry',
    id: 654321,
    completed: false
  },
  {
    Todo: 'Vacuum',
    id: 986754,
    completed: false
  },
  {
    Todo: 'Fold Laundry',
    id: 873573,
    completed: false
  }

];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      Todo: []
    };
  }
       
  addTodo = (e, Todo) => {
    e.preventDefault();
    const newTodo = {
    name: Todo,
    id: Date.now(),
    completed: false
    };
    this.setState({
      Todo: [...this.state.Todo, newTodo]
      // Todo: ""
    });
  };

  toggleTodo = TodoId => {
    console.log(TodoId);
    this.setState({
      Todo: this.state.Todo.map(Todo => {
        if (TodoId === Todo.id) {
          return {
            ...Todo,
            complete: !Todo.complete
          };
        }
        return Todo;
      })
    });
  };

  clearComplete = e => {
    this.setState({
      Todo: this.state.Todo.filter(Todo => !Todo.complete)
    });
  };

  render() {
    console.log('rendering form');
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome To Your Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
        Todo={this.state.Todo}
        toggleTodo={this.toggleTodo}
        clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}
export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

