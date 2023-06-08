const mysql = require("mysql2/promise");

/**
 * make a database connection
 * @returns Promise<mysql.Connection>
 */
async function DB() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  return connection;
}

module.exports = DB;
