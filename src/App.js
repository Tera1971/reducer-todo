import React, { Component } from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todo = [
  {
    task: 'Make Bed',
    id: 2345678,
    completed: false
  },
  {
    task: 'Laundry',
    id: 654321,
    completed: false
  },
  {
    task: 'Vacuum',
    id: 986754,
    completed: false
  },
  {
    task: 'Fold Laundry',
    id: 873573,
    completed: false
  }

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo
    };
  }
       
  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
    name: item,
    id: Date.now(),
    completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  toggleItem = ItemId => {
    console.log(itemId);
    this.setState({
      todo: this.state.todo.map(task => {
        if (itemId === item.id) {
          return {
            ...task,
            complete: !item.completw
          };
        }
        return item;
      })
    });
  };

  clearComplete = e => {
    this.setState({
      todo: this.state.todo.filter(task => !task.complete)
    });
  };

  render() {
    console.log('rendering form');
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome To Your Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;