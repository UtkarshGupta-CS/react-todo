import React from 'react';

export default class TodoListItem extends React.Component{
   render(){
      return (
         <tr>
            <td>{this.props.task}</td>
            <td>
               <button>Edit</button>
               <button>Delete</button>
            </td>
         </tr>
      )
   }
}