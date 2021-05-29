const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const pool = require('./db')
require('dotenv').config()


// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '20mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))


// Routes
// Clear and Initialize Table: items
app.post(`/${process.env.CLEAR_ITEMS_TABLE_URL}`, (req, res) => {
  try {
    pool.query("DROP TABLE IF EXISTS items; CREATE TABLE items(id INT NOT NULL, name VARCHAR(80) NOT NULL, quality VARCHAR(24), level SMALLINT, required_level SMALLINT, item_class VARCHAR(24), item_subclass VARCHAR(24), inventory_type VARCHAR(24));");
    console.log("Database Cleared and Initialized");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Seed Table: items
app.post(`/${process.env.WRITE_BASE_DATA_ITEMS_TABLE_URL}`, async (req, res) => {
  try {
    await pool.query(
      "COPY items FROM '/Users/jm-laptop/Downloads/itemsData.csv' CSV HEADER"
    );
  } catch (error) {
    throw new Error(error.message);
  }


  // try {
  //   const arrayOfArrays = req.body;
  //   for (let array of arrayOfArrays) {
  //     for (let itemObject of array) {
  //       const { id, name, quality, level, required_level, item_class, item_subclass, inventory_type, preview_item } = itemObject;

  // await pool.query(
  //   "INSERT INTO items (id, name, quality, level, required_level, item_class, item_subclass, inventory_type, preview_item) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;", [id, name, quality, level, required_level, item_class, item_subclass, inventory_type, preview_item]
  // );
  //     }
  //   }
  //   console.log("Items written to the table.")
  // } catch (error) {
  //   throw new Error(error.message);
  // }
});






// Remove Poor and Common Items
app.delete("/removePandC", async (req, res) => {
  try {
    await pool.query("DELETE FROM items WHERE quality = 'Poor' OR quality = 'Common'");
    res.json("Poor and Common items were deleted.")
  } catch (error) {
    throw new Error(error.message);
  }
});

app.get("/items", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (error) {
    throw new Error(error.message);
  }
});







// Create
app.post("/items", async (req, res) => {
  try {

    // res.json(newItem.rows[0]);
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
