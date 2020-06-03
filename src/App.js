import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super();
  this.state = {
    listItem: ""
  };
}
handleChanges = e => {
  console.log(e.target.value);
  this.setState({ listItem: e.target.value });
};


submitItem = e => {
  e.preventDefault();
  this.props.addItem(e, this.state.listItem);
};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.listItem}
          name="listItem"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
      </div>
    );
  }
}

export default App;
