import diskdb from 'diskdb';
import path   from 'path';

const db = diskdb.connect(path.join(__dirname, '..', 'db'), ['todos']);

function update (id, todo) {
  return db.todos.update({ _id: id }, todo);
}

export default update;
