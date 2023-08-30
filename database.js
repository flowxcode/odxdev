const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./myDatabase.db');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)");
});

db.close();