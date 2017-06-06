import React from 'react';

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
   render(){
      return (
         <div>
            <h1>React ToDo Application</h1>
         </div>
      ); 
   }
}