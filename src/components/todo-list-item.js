import React from 'react';

export default class TodoListItem extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         isEditing: false
      }
   }

   renderActionSection() {
      if (this.state.isEditing) {
         return (
            <td>
               <button onClick={this.onSaveClick.bind(this)}>Save</button>
               <button onClick={this.onCancleClick.bind(this)}>Cancel</button>
            </td>
         );
      }
      return (
         <td>
            <button onClick={this.onEditClick.bind(this)}  >Edit</button>
            <button>Delete</button>
         </td>
      );
   }

   renderTaskSection() {
      const { task, isCompleted } = this.props;

      const taskStyle = {
         color: isCompleted ? 'green' : 'red',
         cursor: 'pointer'
      };
      if(this.state.isEditing) {
         return (
            <td>
               <form onSubmit={this.onSaveClick.bind(this)}>
                  <input type="text" defaultValue={task} ref="editInput"/>
               </form>
            </td>
         )
      }
      return (
         <td onClick={this.props.toggleTask.bind(this, task)}
            style={taskStyle} >{task}</td>
      );
   }

   render() {
      return (
         <tr>
            {this.renderTaskSection()}
            {this.renderActionSection()}
         </tr>
      )
   }

   onEditClick() {
      this.setState({ isEditing: true });
   }

   onCancleClick() {
      this.setState({ isEditing: false });
   }

   onSaveClick(event) {
      event.preventDefault();

      const oldTask = this.props.task;
      const newTask = this.refs.editInput.value;
      this.props.saveTask(oldTask, newTask);
      this.setState({ isEditing: false })
   }
}