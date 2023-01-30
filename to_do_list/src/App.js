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
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form onSubmit={(e) => this.addTodo(e)}>
              <input
                id="userInput"
                placeholder="Add Todo"
                value={this.state.text}
                onChange={(e) => {
                  this.updateValue(e);
                }}
              />
              <button id="enter" type="submit">
                <i class="fas fa-pencil-alt"></i>
              </button>
            </form>
          </div>
        </div>
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
      <div class="row">
        <div class="listItems col-12">
          <ul class="col-12 offset-0 col-sm-8 offset-sm-2">
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
        </div>
      </div>
    );
  }
}

export default App;
