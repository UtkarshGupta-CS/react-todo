import _ from 'lodash';
import React from 'react';
import TodoListHeader from './todo-list-header';
import TodoListItem from './todo-list-item';

export default class TodoList extends React.Component {

   renderItems() {
      return _.map(this.props.todo, (todo, index) => <TodoListItem key={index} {...todo} />);
   }

   render() {
      return (
         <table>
            <TodoListHeader />
            {this.renderItems()}
         </table>
      );
   }
}