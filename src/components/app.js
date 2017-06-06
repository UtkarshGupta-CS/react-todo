import React from 'react';
import CreateTodo from './create-todo';
import TodoList from './todo-list';

const todo = [
   {
      task: 'make React tutorial',
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
         <div>
            <h1>React ToDo Application</h1>
            <CreateTodo createTask={this.createTask.bind(this)} />
            <TodoList todo={this.state.todo} />
         </div>
      );
   }

   createTask(task) {
      this.state.todo.push({
         task,
         isCompleted: false
      });
      this.setState({ todo: this.state.todo });
   }
}