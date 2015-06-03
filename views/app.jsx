import Layout from './layout.jsx';
import React  from 'react';
import Todo   from '../components/todo.jsx';
import xhr    from 'promised-xhr';

const App = React.createClass({
  getInitialState() {
    const todos = this.props.todos;

    return { todos };
  },

  createTodo: async function (e) {
    try {
      e.preventDefault();

      const input = this.refs.newTodo.getDOMNode();

      const { body } = await xhr.post('/api/', {
        data: {
          todo: input.value
        }
      });

      const todos = Array.from(this.state.todos);
      todos.push(body);

      this.setState({ todos });
    } catch (err) {
      console.log(err);
    }
  },

  render() {
    function showTodos (todo) {
      return (<Todo key={ todo._id } {...todo} />);
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
          { this.state.todos.map(showTodos) }
        </section>
      </Layout>
    );
  }
});

export default App;
