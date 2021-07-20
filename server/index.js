require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const pool = require('./db')


// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))


// Get user login data
app.get("/user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const userLoginData = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    res.json(userLoginData.rows[0]);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Clear and Initialize armor Table
app.post(`/${process.env.CLEAR_ARMOR_TABLE_URL}`, (req, res) => {
  try {
    pool.query("DROP TABLE IF EXISTS armor; CREATE TABLE armor(item_key SERIAL PRIMARY KEY, id INT NOT NULL, show BOOLEAN, level INT, preview_item JSON);");
    console.log("armor Table Cleared and Initialized");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Write armor Table
app.post(`/${process.env.WRITE_DETAIL_DATA_ARMOR_TABLE_URL}`, async (req, res) => {
  try {
    const array = req.body
    for (let itemObject of array) {
      const { id, show, level, preview_item } = itemObject;

      await pool.query(
        "INSERT INTO armor (id, show, level, preview_item) VALUES($1, $2, $3, $4);", [id, show, level, preview_item]
      );
    }
    console.log("armor Table Written");
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete Duplicate Rows from armor Table
app.post(`/${process.env.DELETE_DUPLICATE_ROWS_ARMOR_TABLE_URL}`, (req, res) => {
  try {
    pool.query("DELETE FROM armor a USING armor b WHERE a.item_key > b.item_key AND a.id = b.id;");
    console.log("Duplicate Data Deleted");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Clear and Initialize weapon Table
app.post(`/${process.env.CLEAR_WEAPON_TABLE_URL}`, (req, res) => {
  try {
    pool.query("DROP TABLE IF EXISTS weapon; CREATE TABLE weapon(item_key SERIAL PRIMARY KEY, id INT NOT NULL, show BOOLEAN, level INT, preview_item JSON);");
    console.log("weapon Table Cleared and Initialized");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Write weapon Table
app.post(`/${process.env.WRITE_DETAIL_DATA_WEAPON_TABLE_URL}`, async (req, res) => {
  try {
    const array = req.body
    for (let itemObject of array) {
      const { id, show, level, preview_item } = itemObject;

      await pool.query(
        "INSERT INTO weapon (id, show, level, preview_item) VALUES($1, $2, $3, $4);", [id, show, level, preview_item]
      );
    }
    console.log("weapon Table Written");
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete Duplicate Rows from weapon Table
app.post(`/${process.env.DELETE_DUPLICATE_ROWS_WEAPON_TABLE_URL}`, (req, res) => {
  try {
    pool.query("DELETE FROM weapon a USING weapon b WHERE a.item_key > b.item_key AND a.id = b.id;");
    console.log("Duplicates Data Deleted");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Get all armor items
app.get("/armor", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM armor ORDER BY level ASC");
    res.json(allItems.rows);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all weapon items
app.get("/weapon", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM weapon ORDER BY level ASC");
    res.json(allItems.rows);
  } catch (error) {
    throw new Error(error.message);
  }
});









// Create
// app.post("/items", async (req, res) => {
//   try {

//     // res.json(newItem.rows[0]);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

// Get all
// app.get("/items", async (req, res) => {
//   try {
//     const allItems = await pool.query("SELECT * FROM items");
//     res.json(allItems.rows);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

// Get one
// app.get("/items/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const item = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
//     res.json(item.rows[0]);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

// Update
// app.put("/items/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { item_class } = req.body;
//     await pool.query("UPDATE items SET item_class = $1 WHERE id = $2", [item_class, id]);
//     res.json("Item was updated.")
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

// Delete
// app.delete("/items/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await pool.query("DELETE FROM items WHERE id = $1", [id]);
//     res.json("Item was deleted.")
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });


// Listening
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
