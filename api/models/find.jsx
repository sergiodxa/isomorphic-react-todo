import diskdb from 'diskdb';
import path   from 'path';

const db = diskdb.connect(path.join(__dirname, '..', 'db'), ['todos']);

function read (todo) {
  return db.todos.find();
}

export default read;
