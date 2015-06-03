import express    from 'express';
import bodyParser from 'body-parser';

import create from './models/create.jsx';
import find   from './models/find.jsx';
import remove from './models/remove.jsx';
import update from './models/update.jsx';

const app = express();

app
  .use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.text({ type: 'text/html' }))
  .use(bodyParser.json());

// obtener listado de todos
app.get('/', (req, res) => {
  const todos = find();
  res.json(todos);
});

// crear todo
app.post('/', (req, res) => {
  const todo     = req.body.todo;

  const response = create(todo);

  if (response) {
    res.json(response);
  }

  res.status(400)
    .send(new Error('No se recibió ningún TODO'));
});

// actualizar todo
app.put('/', (req, res) => {
  let { _id: id, status, todo } = req.body;

  if (status === undefined || status === false) {
    status = true;
  } else {
    status = false;
  }

  const response = update(id, {
    status: status,
    todo: todo
  });

  if (response) {
    res.json(response);
  }

  res.status(400)
    .send(new Error('Hubo un error en la solicitud.'));
});

// borrar todo
app.delete('/', (req, res) => {
  const id       = req.body._id;
  const response = remove(id);

  if (response) {
    res.json(find());
  }

  res.status(401)
    .send(new Error('Hubo un error al borrar el TODO.'));
})

export default app;
