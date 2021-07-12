const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const bodyParser = require('body-parser')
const pool = require('./db')
require('dotenv').config()


// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))


// Get user login data
app.get("/user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    console.log("This is email going in for DB query", email)
    const userLoginData = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    res.json(userLoginData.rows[0]);
    console.log("This is userLoginData", userLoginData.rows[0])
  } catch (error) {
    throw new Error(error.message);
  }
});

// Listening
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});