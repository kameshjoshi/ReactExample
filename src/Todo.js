import React from "react";
import { render } from "react-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

export class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false
    };
  }

  handleInputChange = event => {
    let val = event.target.checked;
    console.log("checked:" + val);
    this.props.addTodoDone(this.props.index);
  };

  render() {
    return (
      <ListGroupItem>
        <input
          name="done"
          type="checkbox"
          checked={this.props.done}
          onChange={this.handleInputChange}
        />

        {this.props.title}
      </ListGroupItem>
    );
  }
}
