import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }
  Change = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: 10 }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.Change}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    )
  }
}

export default AddTodo