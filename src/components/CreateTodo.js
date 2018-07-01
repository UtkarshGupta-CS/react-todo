import React from "react";
import AppContext from "./AppContext";

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  renderError = () => {
    if (!this.state.error) {
      return null;
    }

    return <div style={{ color: "red" }}>{this.state.error}</div>;
  };

  render() {
    return (
      <form onSubmit={this.handleCreate}>
        <input
          type="text"
          placeholder="What do I need to do?"
          ref="createInput"
        />
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }

  handleCreate = event => {
    event.preventDefault();

    const { createInput } = this.refs;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = "";
  };

  validateInput = task => {
    if (!task) {
      return "Please enter the task";
    } else if (_.find(this.state.todo, todo => todo.task === task)) {
      return "Task already exist";
    }
    return null;
  };
}
