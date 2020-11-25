// Set up MySQL ORMconnectionion.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  ORMconnection = mysql.createORMconnectionion(process.env.JAWSDB_URL)
} else {
  ORMconnection = mysql.createORMconnectionion({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "burgers_db"
  });
}

ORMconnection.connect();

module.exports = ORMconnection;

// ORMconnection.connect(function (err) {
  //   if (err) {
  //     console.error("errir ORMconnectioning: " + err.stack);
  //     return;
  //   }
  //   console.log("ORMconnectioned as id" + ORMconnection.threadId);
  // });
  

// var ORMconnection = new Database(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : {
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "1234",
//   database: "burgers_db"
// });


// class Database {
//   constructor(config) {
//     this.ORMconnectionion = mysql.createORMconnectionion(config);
//   }
//   query(sql, args = []) {
//     return new Promise((resolve, reject) => {
//       this.ORMconnectionion.query(sql, args, (err, rows) => {
//         if (err) 
//           return reject(err);

//         resolve(rows);
//       });
//     });
//   }
//   close() {
//     return new Promise((resolve, reject) => {
//       this.ORMconnectionion.end(err => {
//         if (err) 
//           return reject(err);

//         resolve();
//       });
//     });
//   }
// }








