import diskdb from 'diskdb';
import path   from 'path';

const db = diskdb.connect(path.join(__dirname, '..', 'db'), ['todos']);

function remove (id) {
  return db.todos.remove({ _id: id });
}

export default remove;
