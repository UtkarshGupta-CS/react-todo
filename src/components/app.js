import React from 'react';
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
   
   constructor(props){
      super(props);
      this.state = {
         todo: todo
      }
   }
   
   render(){
      return (
         <div>
            <h1>React ToDo Application</h1>
            <TodoList todo = {this.state.todo} />
         </div>
      ); 
   }
}