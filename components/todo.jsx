import React from 'react';
import xhr   from 'promised-xhr';

const Todo = React.createClass({
  getInitialState() {
    const { _id, status, todo } = this.props;

    return { _id, status, todo };
  },

  updateStatus: async function (e) {
    try {
      e.preventDefault();

      let status;

      if (this.state.status) status = false;
      else status = 'on';

      const state = {
        _id: this.state._id,
        todo: this.state.todo,
        status: status
      };

      this.setState(state);

      const response = await xhr.send('/api', {
        method: 'PUT',
        data  : state
      });
    } catch (err) {
      return err;
    }
  },

  changeTodo: async function (e) {
    try {
      e.preventDefault();

      const response = await xhr.send('/api', {
        method: 'PUT',
        data  : this.state
      });
    } catch (err) {
      console.log(err);
    }
  },

  deleteTodo: async function (e) {
    try {
      e.preventDefault();

      const { body: todos } = await xhr.send('/api', {
        method: 'DELETE',
        data: this.state
      });

      this.props.removedTodo(todos);
    } catch (err) {
      console.log(err);
    }
  },

  onChangeTodo: async function (e) {
    try {
      const todo = e.target.value;

      this.setState({
        _id: this.state._id,
        status: this.state.status,
        todo
      });
    } catch (err) {
      console.log(err);
    }
  },

  render() {
    return (
      <article>
        <form onSubmit={ this.changeTodo }>
          <input type="hidden" ref="id"
           name="_id" value={ this.state._id} />

          <div className="form-change-status">
            <input type="checkbox"
             ref="status"
             name="status"
             checked={ this.state.status} />
            <button type="button"
             onClick={ this.updateStatus }></button>
          </div>

          <div className="form-change-todo">
            <input type="text"
             onChange={ this.onChangeTodo }
             ref="name"
             name="todo"
             value={ this.state.todo} />
            <button type="button"
             onClick={ this.changeTodo}
             className="fa fa-pencil"></button>
          </div>

          <div className="form-delete-todo">
            <button type="button"
             onClick={ this.deleteTodo }
             className="fa fa-close"></button>
          </div>
        </form>
      </article>
    );
  }
})

export default Todo;
