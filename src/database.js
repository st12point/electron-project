const mysql = require("mysql2");
const config = {
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "electron_db"
};
const connection = mysql.createConnection(config);
const q = "SELECT * FROM `users`";
const [rows] = connection.execute(q);
const result = JSON.stringify(rows);
function getConnection() {
  return result;
}

module.exports = { getConnection };
