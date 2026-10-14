const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('../public'));

// API: ดึงรายการสินค้าทั้งหมด (GET)
app.get('/api/products', (req, res) => {
    const sql = `SELECT * FROM products`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ products: rows });
    });
});

// API: เพิ่มสินค้าใหม่ (POST)
app.post('/api/products', (req, res) => {
    const { name, price, quantity } = req.body;
    if (!name || !price || !quantity) {
        return res.status(400).json({ error: 'Please provide name, price, and quantity' });
    }
    const sql = `INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)`;
    db.run(sql, [name, price, quantity], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Success',
            data: { id: this.lastID, name, price, quantity }
        });
    });
});

// API: ลบสินค้า (DELETE)
app.delete('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM products WHERE id = ?`;
    db.run(sql, id, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Deleted', changes: this.changes });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
