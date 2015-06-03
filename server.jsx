import api     from './api';
import engine  from 'react-engine';
import express from 'express';
import path    from 'path';

import find    from './api/models/find.jsx';

const app  = express();
const port = Number(process.env.PORT || 3000)

app.engine('.jsx', engine.server.create());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

app.use('/api', api);

app.get('/', (req, res) => {
  const todos = find();

  res.render('todo', { todos });
});

app.listen(port);
