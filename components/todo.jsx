import React from 'react';

const Todo = React.createClass({
  getInitialState() {
    return this.props;
  },

  updateStatus() {},
  changeTodo() {},
  deleteTodo() {},

  onChange(e) {
    console.log(e);
  },

  render() {
    return (
      <article>
        <form action="/todo"
         method="PUT"
         className="form-change-status">
          <input type="hidden"
           name="_id" value={ this.state._id} />
          <input type="hidden"
           name="todo" value={ this.state.todo} />
          <input type="checkbox" onChange={ this.onChange }
           name="status" checked={ this.state.checked} />
          <button></button>
        </form>

        <form action="/todo"
         method="PUT"
         className="form-change-todo">
          <input type="hidden"
           name="_id" value={ this.state._id} />
          <input type="hidden"
           name="status" value={ this.state.checked} />
          <input type="text"
           name="todo" value={ this.state.todo} />
          <button className="fa fa-pencil"></button>
        </form>

        <form action="/todo"
         method="DELETE"
         className="form-delete-todo">
          <input type="hidden"
           name="_id" value={ this.state._id} />
          <button className="fa fa-close"></button>
        </form>
      </article>
    );
  }
})

export default Todo;
