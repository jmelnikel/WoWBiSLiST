const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const pool = require('./db')


// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '20mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))


// Routes
// Clear and Initialize Database
app.post("/NRRNOuPGB6Uk9gZKh5ycPpmPMxH2", (req, res) => {
  try {
    pool.query("DROP TABLE items; CREATE TABLE items(item_key SERIAL PRIMARY KEY, id INT, name VARCHAR(80), item_class VARCHAR(24), item_subclass VARCHAR(24), inventory_type VARCHAR(24));");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Seed Database
app.post("/WP40IlUnz0et3XDIjZE47FhLyrk2", async (req, res) => {
  try {
    const arrayOfArrays = req.body;
    await arrayOfArrays.forEach(async (array, index) => {
      await array.forEach(async (itemObject, index) => {
        const { data } = itemObject;
        const { id } = data;
        const name = data.name.en_US;
        const item_class = data.item_class.name.en_US;
        const item_subclass = data.item_subclass.name.en_US;
        const inventory_type = data.inventory_type.name ? data.inventory_type.name.en_US : data.inventory_type.type;
        await pool.query(
          "INSERT INTO items (id, name, item_class, item_subclass, inventory_type) VALUES($1, $2, $3, $4, $5) RETURNING *;", [id, name, item_class, item_subclass, inventory_type]
        );
      })
      console.log(`Array ${index + 1} of ${arrayOfArrays.length} written to database!`)
    })



  } catch (error) {
    throw new Error(error.message);
  }
});

// Create
app.post("/items", async (req, res) => {
  const { id } = req.body;
  const name = req.body.name.en_US
  const item_class = req.body.item_class.name.en_US;
  const item_subclass = req.body.item_subclass.name.en_US;
  const inventory_type = req.body.inventory_type.name.en_US;

  try {
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
