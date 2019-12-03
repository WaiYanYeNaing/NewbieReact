import React, { Component } from 'react'
import Todoitems from './Todoitems'
import PropTypes from 'prop-types'

export default class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  }
  render() {
    return this.props.todos.map(todo => (
      <Todoitems
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ))
  }
}
