import diskdb from 'diskdb';
import path   from 'path';

const db = diskdb.connect(path.join(__dirname, '..', 'db'), ['todos']);

function create (todo) {
  if (!todo) {
    return false;
  }

  return db.todos.save({
    todo: todo
  });
}

export default create;
