import { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super();

    this.state = {
      done: props.todo.done
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    this.setState((prevState) => {
      return {
        done: !prevState.done
      };
    });
  }

  handleClick() {
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.handleChange}
        />
        <p className={this.state.done ? "done" : null}>
          {this.props.todo.title}
        </p>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}
