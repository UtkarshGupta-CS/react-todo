import React from "react";
import styled from "styled-components";

import AppContext from "./AppContext";
import TodoListHeader from "./TodoListHeader";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
  render() {
    return (
      <TodoListTable>
        <TodoListHeader />
        <AppContext.Consumer>
          {val =>
            val.todo.map((todo, index) => (
              <TodoListItem index={index} todo={todo} {...this.props} />
            ))
          }
        </AppContext.Consumer>
      </TodoListTable>
    );
  }
}

const TodoListTable = styled.table`
  margin: 0 auto;
  text-align: center;
`;
