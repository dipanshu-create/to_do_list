import "./App.css";
import Apps from "./Apps";
import React from "react";
import ReactDOM from "react-dom";
const { Component } = React,
  { render } = ReactDOM,
  rootNode = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], text: "" };
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    this.setState({
      todos: [this.state.text, ...this.state.todos],
      text: "",
    });
  }

  removeTodo(name, i) {
    let todos = this.state.todos.slice();
    todos.splice(i, 1);
    this.setState({
      todos,
    });
  }

  updateValue(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.addTodo(e)}>
          <input
            placeholder="Add Todo"
            value={this.state.text}
            onChange={(e) => {
              this.updateValue(e);
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

class TodoList extends React.Component {
  removeItem(item, i) {
    this.props.removeTodo(item, i);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, i) => {
          return (
            <li
              onClick={() => {
                this.removeItem(todo, i);
              }}
              key={i}
            >
              {todo}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
