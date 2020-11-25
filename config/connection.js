// Set up MySQL connection.
var mysql = require("mysql");

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }
  query(sql, args = []) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) 
          return reject(err);
        
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) 
          return reject(err);
        
        resolve();
      });
    });
  }
}

const connect = new Database(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "burgers_db"
});

module.exports = connect;














// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "1234",
//   database: "burgers_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;
