require('dotenv').config()
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./db')
// const bodyParser = require('body-parser')


// Middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
// app.use(express.json({ limit: '50mb', extended: true }))
// app.use(express.urlencoded({ limit: '50mb', extended: true }))
// app.use(bodyParser.json({ limit: '50mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))


// Get user login data
app.get("api/user/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const userLoginData = await db.query("SELECT * FROM users WHERE email = $1;", [email]);
    res.status(200).json(userLoginData.rows[0]);

  } catch (error) {
    throw new Error(error.message);
  }
});

// see if morgan is working - should log info in server console.
// res.send("This is working");
// res.json({
//   status: "success",
//   restaurant: "example",
// })







// Clear and Initialize armor Table
app.post(`/api/${process.env.CLEAR_ARMOR_TABLE_URL}`, (req, res) => {
  try {
    db.query("DROP TABLE IF EXISTS armor; CREATE TABLE armor(item_key SERIAL PRIMARY KEY, id INT NOT NULL, show BOOLEAN, level INT, preview_item JSON);");
    console.log("armor Table Cleared and Initialized");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Write armor Table
app.post(`/api/${process.env.WRITE_DETAIL_DATA_ARMOR_TABLE_URL}`, async (req, res) => {
  try {
    const array = req.body
    for (let itemObject of array) {
      const { id, show, level, preview_item } = itemObject;

      await db.query(
        "INSERT INTO armor (id, show, level, preview_item) VALUES($1, $2, $3, $4);", [id, show, level, preview_item]
      );
    }
    console.log("armor Table Written");
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete Duplicate Rows from armor Table
app.post(`/api/${process.env.DELETE_DUPLICATE_ROWS_ARMOR_TABLE_URL}`, (req, res) => {
  try {
    db.query("DELETE FROM armor a USING armor b WHERE a.item_key > b.item_key AND a.id = b.id;");
    console.log("Duplicate Data Deleted");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Clear and Initialize weapon Table
app.post(`/api/${process.env.CLEAR_WEAPON_TABLE_URL}`, (req, res) => {
  try {
    db.query("DROP TABLE IF EXISTS weapon; CREATE TABLE weapon(item_key SERIAL PRIMARY KEY, id INT NOT NULL, show BOOLEAN, level INT, preview_item JSON);");
    console.log("weapon Table Cleared and Initialized");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Write weapon Table
app.post(`/api/${process.env.WRITE_DETAIL_DATA_WEAPON_TABLE_URL}`, async (req, res) => {
  try {
    const array = req.body
    for (let itemObject of array) {
      const { id, show, level, preview_item } = itemObject;

      await db.query(
        "INSERT INTO weapon (id, show, level, preview_item) VALUES($1, $2, $3, $4);", [id, show, level, preview_item]
      );
    }
    console.log("weapon Table Written");
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete Duplicate Rows from weapon Table
app.post(`/api/${process.env.DELETE_DUPLICATE_ROWS_WEAPON_TABLE_URL}`, (req, res) => {
  try {
    db.query("DELETE FROM weapon a USING weapon b WHERE a.item_key > b.item_key AND a.id = b.id;");
    console.log("Duplicates Data Deleted");
  } catch (error) {
    throw new Error(error.message);
  }
})

// Get all armor items
app.get("/api/armor", async (req, res) => {
  try {
    const allItems = await db.query("SELECT * FROM armor ORDER BY level ASC");
    res.json(allItems.rows);
  } catch (error) {
    throw new Error(error.message);
  }
});

// Get all weapon items
app.get("/api/weapon", async (req, res) => {
  try {
    const allItems = await db.query("SELECT * FROM weapon ORDER BY level ASC");
    res.json(allItems.rows);
  } catch (error) {
    throw new Error(error.message);
  }
});


// Listening
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
