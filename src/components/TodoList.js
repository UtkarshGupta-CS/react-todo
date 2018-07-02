import React from "react";
import styled from "styled-components";

import AppContext from "./AppContext";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
  render() {
    return (
      <TodoListTable>
        <tbody>
          <AppContext.Consumer>
            {val =>
              val.todo.map((todo, index) => (
                <TodoListItem
                  key={index}
                  index={index}
                  todo={todo}
                  {...this.props}
                />
              ))
            }
          </AppContext.Consumer>
        </tbody>
      </TodoListTable>
    );
  }
}

const TodoListTable = styled.table`
  margin: 0 auto;
  text-align: center;
`;
