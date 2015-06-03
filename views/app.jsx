import React  from 'react';
import Layout from './layout.jsx';
import Todo   from '../components/todo.jsx';

const App = React.createClass({
  createTodo(e) {
    e.preventDefault();

    const input = this.refs.newTodo;
    console.log(input);
  },

  render() {
    function showTodos (todo) {
      return (<Todo {...todo} key={ todo._id } />);
    }

    return (
      <Layout>
        <header>
          <h1>React TODO</h1>

          <form action="/api/"
           method="POST"
           className="form-create-todo"
           onSubmit={ this.createTodo }>
           <input type="text"
            placeholder="¿Qué te queda por hacer?"
            name="todo"
            ref="newTodo" />
          </form>
        </header>

        <section>
          { this.props.todos.map(showTodos) }
        </section>
      </Layout>
    );
  }
});

export default App;
