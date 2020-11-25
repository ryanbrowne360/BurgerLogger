// Set up MySQL ORMconnectionion.
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

const ORMconnection = new Database(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : {
  host: "localhost",
  port: 3306,
  user: "awnd1y1gogl85lf7",
  password: "mdhigivzpj0y9dss",
  database: "burgers_db"
});



module.exports = ORMconnection;