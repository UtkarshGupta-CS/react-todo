import React from "react";
import {
  StyledButton,
  TodoInput,
  TodoInputForm
} from "./CustomStyledComponent";
export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      changedDescriptionValue:
        props.todo && props.todo.description ? props.todo.description : ""
    };
  }

  renderActionSection = (todo, index) => {
    if (this.state.isEditing) {
      return (
        <React.Fragment>
          <td>
            <StyledButton onClick={this.onSaveClick}>Save</StyledButton>
          </td>
          <td>
            <StyledButton onClick={this.onCancleClick}>Cancel</StyledButton>
          </td>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <td>
          <StyledButton onClick={this.onEditClick}>Edit</StyledButton>
        </td>
        <td>
          <StyledButton onClick={() => this.props.deleteTask(todo, index)}>
            Delete
          </StyledButton>
        </td>
      </React.Fragment>
    );
  };

  handleTodoDescChange = event => {
    this.setState({ changedDescriptionValue: event.target.value });
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
            <TodoInputForm>
              <TodoInput
                type="text"
                value={this.state.changedDescriptionValue}
                onChange={event => this.handleTodoDescChange(event)}
              />
            </TodoInputForm>
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

  onSaveClick = () => {
    const {
      props: { todo, updateTask, index }
    } = this;

    updateTask(
      {
        isCompleted: todo.isCompleted,
        description: this.state.changedDescriptionValue
      },
      index
    );
    this.setState({ isEditing: false });
  };
}
