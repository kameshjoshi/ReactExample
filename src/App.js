import React from "react";
import { render } from "react-dom";
import { TodoList } from "./TodoList";

export class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      incomplete: [],
      complete: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodoDone = index => {
    let newItem = this.state.incomplete[index];
    let newIncompleteArray = this.state.incomplete;
    newIncompleteArray.splice(index, 1);
    this.setState(prevState => {
      return {
        complete: prevState.complete.concat(newItem),
        incomplete: newIncompleteArray
      };
    });
    console.log("called");
  };

  addTodo = event => {
    if (event.charCode == 13) {
      let value = event.target.value;
      console.log(value);
      this.setState(prevState => {
        return { incomplete: prevState.incomplete.concat(value) };
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Mukku the teacher</h1>
        <input onKeyPress={this.addTodo} />
        <h5>Incomplete</h5>
        <TodoList
          incomplete={this.state.incomplete}
          addTodoDone={this.addTodoDone}
          done={false}
        />
        <h5>Complete</h5>
        <TodoList incomplete={this.state.complete} done={true} />
      </div>
    );
  }
}
