// const mysql = require("mysql2/promise");
// const config = {
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "electron_db"
// };
// const q = "SELECT * FROM `users`";
// const getConnection = async () => {
//   console.log("in database:database.js");
//   const connection = await mysql.createConnection(config);
//   const [rows] = await connection.execute(q);
//   await connection.end();
//   return rows;
// };
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  username: "root",
  password: "root",
  database: "database_development",
  host: "127.0.0.1",
  dialect: "mysql"
});

const getConnection = async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log("connection has been success");
      return sequelize;
    })
    .catch(err => {
      console.log(err);
    });
};
export { getConnection };
