const mysql = require("mysql2/promise");
const config = {
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "electron_db"
};
const q = "SELECT * FROM `users`";

module.exports = async function() {
  console.log("in database:database.js");
  const connection = await mysql.createConnection(config);
  const [rows] = await connection.execute(q);
  await connection.end();
  return rows;
};
