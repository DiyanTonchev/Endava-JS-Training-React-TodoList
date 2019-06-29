import React, { Component } from 'react';
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import uuid from 'uuid';

class TodoList extends Component {
  state = {
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: 'Звънни на Леля',
      //   completed: true
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Купи хляб',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Хвърли боклука',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => {
        this.setState({
          todos: data
        })
      });
  }

  toggleComplete = (id) => {
    let { todos } = this.state;
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({
      todos
    })
  }

  removeTodo = (id) => {
    let { todos } = this.state;
    todos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    })
  }

  addTodo = (title) => {
    let { todos } = this.state;
    todos.push({ id: uuid.v4(), title, completed: false });
    this.setState({
      todos
    })
  }

  // shouldComponentUpdate(prevProps, prevState) {
  //   debugger;
  // }

  render() {
    let { todos } = this.state;
    return (
      <>
        <AddTodo addTodo={this.addTodo} />
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            toggleComplete={this.toggleComplete}
            removeTodo={this.removeTodo}
          />))
        }
      </>
    );
  }
}

export default TodoList;