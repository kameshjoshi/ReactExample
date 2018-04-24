import React from "react";
import { render } from "react-dom";
import { Todo } from "./Todo";
import { ListGroup, ListGroupItem } from "reactstrap";

export class TodoList extends React.Component {
  render() {
    let list = [];
    let incomplete = this.props.incomplete;
    incomplete.map((title, index) => {
      list.push(
        <Todo
          title={title}
          index={index}
          addTodoDone={this.props.addTodoDone}
          done={this.props.done}
        />
      );
    });
    return <ListGroup>{list}</ListGroup>;
  }
}
