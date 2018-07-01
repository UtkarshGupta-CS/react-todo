import _ from "lodash";
import React from "react";
import styled from "styled-components";

import TodoListHeader from "./todo-list-header";
import TodoListItem from "./todo-list-item";

export default class TodoList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, "todo");

    return _.map(this.props.todo, (todo, index) => (
      <TodoListItem key={index} {...todo} {...props} />
    ));
  }

  render() {
    return (
      <TodoListTable>
        <TodoListHeader />
        {this.renderItems()}
      </TodoListTable>
    );
  }
}

const TodoListTable = styled.table`
  margin: 0 auto;
  margin-top: 2em;
  text-align: center;
`