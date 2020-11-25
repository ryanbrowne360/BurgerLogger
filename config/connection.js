// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connect = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "burgers_db"
  });
}



connect.connect(function (err) {
  if (err) {
    console.error("errir connecting: " + err.stack);
    return;
  }
  console.log("connected as id" + connect.threadId);
});

// var connect = new Database(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : {
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "1234",
//   database: "burgers_db"
// });

module.exports = connect;




// class Database {
//   constructor(config) {
//     this.connection = mysql.createConnection(config);
//   }
//   query(sql, args = []) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sql, args, (err, rows) => {
//         if (err) 
//           return reject(err);

//         resolve(rows);
//       });
//     });
//   }
//   close() {
//     return new Promise((resolve, reject) => {
//       this.connection.end(err => {
//         if (err) 
//           return reject(err);

//         resolve();
//       });
//     });
//   }
// }








