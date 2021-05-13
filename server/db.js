const Pool = require('pg').Pool;

const pool = new Pool({
  // user: "jm-laptop",
  // password: "2019WillWork",
  host: "localhost",
  port: 5432,
  database: "wowbislist",
})

module.exports = pool;