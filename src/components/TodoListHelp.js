import React from "react";
import { Help } from "./CustomStyledComponent";
export default class TodoListHeader extends React.Component {
  render() {
    return (
      <Help>
        <ul>
          <li>
            "Each Todo list item has two state.{" "}
            <span style={{ color: "green" }}> Green</span>(Completed) and
            <span style={{ color: "red" }}> Red</span>(Incomplete)."
          </li>
          <li>Click on Todo List Description to toggle the state of todo</li>
        </ul>
      </Help>
    );
  }
}
