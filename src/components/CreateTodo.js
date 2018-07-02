import React from "react";
import AppContext from "./AppContext";
import {
  StyledButton,
  TodoInput,
  TodoInputForm
} from "./CustomStyledComponent";

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      descriptionValue: ""
    };
  }

  renderError = () => {
    if (!this.state.error) {
      return null;
    }

    return <div style={{ color: "red" }}>{this.state.error}</div>;
  };

  handleTodoDescChange = event => {
    this.setState({ descriptionValue: event.target.value });
  };

  render() {
    return (
      <TodoInputForm>
        <TodoInput
          type="text"
          placeholder="What needs to be done?"
          value={this.state.descriptionValue}
          onChange={event => this.handleTodoDescChange(event)}
        />
        <StyledButton onClick={() => this.handleCreate()}>Create</StyledButton>
        {this.renderError()}
      </TodoInputForm>
    );
  }

  handleCreate = () => {
    const validateInput = this.validateInput(this.state.descriptionValue);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.props.createTask(this.state.descriptionValue);
    this.setState({ error: null, descriptionValue: "" });
  };

  validateInput = task => {
    if (!task) {
      return "Please enter the task";
    }
    return null;
  };
}
