import React from "react";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderActionSection = (todo, index) => {
    if (this.state.isEditing) {
      return (
        <React.Fragment>
          <td>
            <button onClick={this.onSaveClick}>Save</button>
          </td>
          <td>
            <button onClick={this.onCancleClick}>Cancel</button>
          </td>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <td>
          <button onClick={this.onEditClick}>Edit</button>
        </td>
        <td>
          <button onClick={() => this.props.deleteTask(todo, index)}>
            Delete
          </button>
        </td>
      </React.Fragment>
    );
  };

  renderTaskSection = () => {
    const { todo, index } = this.props;

    const taskStyle = {
      color: todo && todo.isCompleted ? "green" : "red",
      cursor: "pointer"
    };
    if (this.state.isEditing) {
      return (
        <React.Fragment>
          <td>
            <form onSubmit={this.onSaveClick}>
              <input
                type="text"
                defaultValue={todo && todo.description ? todo.description : ""}
                ref="editInput"
              />
            </form>
          </td>
          {this.renderActionSection(todo, index)}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <td
          onClick={() => this.props.toggleTask(todo, index)}
          style={taskStyle}
        >
          {todo && todo.description ? todo.description : ""}
        </td>
        {this.renderActionSection(todo, index)}
      </React.Fragment>
    );
  };

  render() {
    return <tr>{this.renderTaskSection()}</tr>;
  }

  onEditClick = () => {
    this.setState({ isEditing: true });
  };

  onCancleClick = () => {
    this.setState({ isEditing: false });
  };

  onSaveClick = event => {
    event.preventDefault();
    const {
      props: { todo, updateTask, index }
    } = this;

    updateTask(
      {
        isCompleted: todo.isCompleted,
        description: this.refs.editInput.value
      },
      index
    );
    this.setState({ isEditing: false });
  };
}
