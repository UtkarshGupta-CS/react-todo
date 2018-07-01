import _ from "lodash";
import React from "react";
import styled from "styled-components";

import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import AppContext from "./AppContext";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <ContainerDiv>
          <LogoImage src="../../assets/logo.png" alt="React TODO" />
          <CreateTodo createTask={this.createTask} />
          <TodoList
            toggleTask={this.toggleTask}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
          />
        </ContainerDiv>
      </AppContext.Provider>
    );
  }

  toggleTask = (task, taskIndex) => {
    const toggledTodos = this.state.todo.map((todo, index) => {
      if (index === taskIndex) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    this.setState({
      todo: toggledTodos
    });
  };

  createTask = task => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          description: task,
          isCompleted: false
        }
      ]
    });
  };

  updateTask = (newTask, taskIndex) => {
    const updatedTodos = this.state.todo.map((todo, index) => {
      if (index === taskIndex) {
        todo.description = newTask.description;
      }
      return todo;
    });
    this.setState({
      todo: updatedTodos
    });
  };

  deleteTask = (task, taskIndex) => {
    const remainingTodos = this.state.todo;
    if (taskIndex > -1) {
      remainingTodos.splice(taskIndex, 1);
    }
    this.setState({
      todo: remainingTodos
    });
  };
}

const ContainerDiv = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background: papayawhip no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 767px;
`;

const LogoImage = styled.img`
  height: 25%;
  width: 25%;
`;
