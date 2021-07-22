require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const pool = require('./db')


// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb', extended: true }));


// Get user login data
app.get("/api/user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const userLoginData = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    res.json(userLoginData.rows[0]);
  } catch (error) {
    throw new Error(error.message);
  }
});





// Clear and Initialize armor Table
app.get(`/api/${process.env.CLEAR_ARMOR_TABLE}`, (req, res) => {
  // app.get("/api/clearArmorTable", (req, res) => {
  try {
    pool.query("DROP TABLE IF EXISTS armor; CREATE TABLE armor(item_key SERIAL PRIMARY KEY, id INT NOT NULL, show BOOLEAN, level INT, preview_item JSON);");
    console.log("Table: armor - Cleared and initialized");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Write armor Table
app.post(`/api/${process.env.WRITE_DETAIL_DATA_ARMOR_TABLE}`, async (req, res) => {
  // app.post("/api/writeDetailDataArmorTable", async (req, res) => {
  try {
    const array = req.body;
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
app.get("/api/deleteDuplicateRowsArmorTable", (req, res) => {
  try {
    pool.query("DELETE FROM armor a USING armor b WHERE a.item_key > b.item_key AND a.id = b.id;");
    console.log("Duplicate Data Deleted");
  } catch (error) {
    throw new Error(error.message);
  }
})






// Clear and Initialize weapon Table
app.get(`/api/${process.env.CLEAR_WEAPON_TABLE}`, (req, res) => {
  // app.get("/api/clearWeaponTable", (req, res) => {
  try {
    pool.query("DROP TABLE IF EXISTS weapon; CREATE TABLE weapon(item_key SERIAL PRIMARY KEY, id INT NOT NULL, show BOOLEAN, level INT, preview_item JSON);");
    console.log("weapon Table Cleared and Initialized");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Write weapon Table
app.post(`/api/${process.env.WRITE_DETAIL_DATA_WEAPON_TABLE}`, async (req, res) => {
  // app.post("/api/writeDetailDataWeaponTable", async (req, res) => {
  try {
    const array = req.body;
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
app.get("/api/deleteDuplicateRowsWeaponTable", (req, res) => {
  try {
    pool.query("DELETE FROM weapon a USING weapon b WHERE a.item_key > b.item_key AND a.id = b.id;");
    console.log("Duplicates Data Deleted");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Get all armor items
app.get("/api/getArmorItems", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM armor ORDER BY level ASC");
    res.json(allItems.rows);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all weapon items
app.get("/api/getWeaponItems", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM weapon ORDER BY level ASC");
    res.json(allItems.rows);
  } catch (error) {
    throw new Error(error.message);
  }
});


// Listening
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
