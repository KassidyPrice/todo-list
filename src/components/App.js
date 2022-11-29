import { Component } from "react";

import "../styles/styles.css";
import testData from "../helpers/testData.json";
import TodoItem from "./TodoItem";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    this.setState({
      todos: testData.items
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: prevState.todos.at(-1)?.id + 1 || 1,
            title: prevState.todo,
            done: false
          }
        ],
        todo: ""
      };
    });
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  deleteTodo(id) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => {
          return todo.id !== id;
        })
      };
    });
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
      return (
        <TodoItem key={todo.id} todo={todo} deleteTodo={this.deleteTodo} />
      );
    });
  }

  render() {
    return (
      <div className="app">
        <h1>My Todo List</h1>
        <form className="add-todo" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="add todo"
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <button type="submit" disabled={this.state.todo.length < 1}>
            Add
          </button>
        </form>

        {this.renderTodos()}
      </div>
    );
  }
}
