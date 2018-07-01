import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';

import CreateTodo from './create-todo';
import TodoList from './todo-list';

const todo = [
   {
      task: 'complete React tutorial',
      isCompleted: false
   },
   {
      task: 'eat dinner',
      isCompleted: true
   }
];

export default class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         todo: todo
      }
   }

   render() {
      return (
         <ContainerDiv>
            <h1>React ToDo Application</h1>
            <CreateTodo todo={this.state.todo} createTask={this.createTask.bind(this)} />
            <TodoList todo={this.state.todo}
               toggleTask={this.toggleTask.bind(this)}
               saveTask={this.saveTask.bind(this)}
            />
         </ContainerDiv>
      );
   }

   toggleTask(task) {
      const foundTodo = _.find(this.state.todo, todo => todo.task === task);
      foundTodo.isCompleted = !foundTodo.isCompleted;
      this.setState({ todo: this.state.todo })
   }

   createTask(task) {
      this.state.todo.push({
         task,
         isCompleted: false
      });
      this.setState({ todo: this.state.todo });
   }

   saveTask(oldTask, newTask) {
      const foundTodo = _.find(this.state.todo, todo => todo.task === oldTask);
      foundTodo.task = newTask;
      this.setState({ todo: this.state.todo });
   }
}

const ContainerDiv = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`