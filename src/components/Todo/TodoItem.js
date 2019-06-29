import React, { Component } from 'react'
import PropTypes from 'prop-types';

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

class TodoItem extends Component {
  getStyle() {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { title, id, completed, toggleComplete, removeTodo } = this.props;
    return (
      <div style={this.getStyle()}>   
          <input type='checkbox' onChange={toggleComplete.bind(this, id)} checked={completed} id={id} />
          &nbsp;&nbsp;
          {title}
          <button onClick={removeTodo.bind(this, id)} style={btnStyle}>x</button>
      </div>
    )
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default TodoItem;
