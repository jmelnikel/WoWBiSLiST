const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const pool = require('./db')


// Middleware
app.use(cors());
app.use(express.json()); //req.body


// Routes
// Create
app.post("/items", async (req, res) => {
  try {
    const { id, name, item_class, item_subclass, inventory_type } = req.body;
    const newItem = await pool.query(
      "INSERT INTO items (id, name, item_class, item_subclass, inventory_type) VALUES($1, $2, $3, $4, $5) RETURNING *", [id, name, item_class, item_subclass, inventory_type]
    );
    res.json(newItem.rows[0]);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all
app.get("/items", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get one
app.get("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
    res.json(item.rows[0]);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Update
app.put("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { item_class } = req.body;
    await pool.query("UPDATE items SET item_class = $1 WHERE id = $2", [item_class, id]);
    res.json("Item was updated.")
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete
app.delete("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM items WHERE id = $1", [id]);
    res.json("Item was deleted.")
  } catch (error) {
    throw new Error(error.message);
  }
});


// Listening
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
