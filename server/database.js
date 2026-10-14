const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbFile = path.join(__dirname, 'inventory.db');
const db = new sqlite3.Database(dbFile, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            quantity INTEGER NOT NULL
        )`, (err) => {
            if (!err) {
                db.get(`SELECT COUNT(*) as count FROM products`, (err, row) => {
                    if (row && row.count === 0) {
                        db.run(`INSERT INTO products (name, price, quantity) VALUES ('Laptop', 25000, 10)`);
                        db.run(`INSERT INTO products (name, price, quantity) VALUES ('Mouse', 500, 50)`);
                    }
                });
            }
        });
    }
});

module.exports = db;
