const Pool = require('pg').Pool;
require('dotenv').config()

const pool = new Pool({
  // user:
  // password:
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
})

module.exports = pool;