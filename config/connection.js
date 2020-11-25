// Set up MySQL ORMconnectionion.
var mysql = require("mysql");


class Database {
  constructor(config) {
    this.ORMconnection = mysql.createConnection(config);
  }
  query(sql, args = []) {
    return new Promise((resolve, reject) => {
      this.ORMconnection.query(sql, args, (err, rows) => {
        if (err) 
          return reject(err);

        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.ORMconnectionn.end(err => {
        if (err) 
          return reject(err);

        resolve();
      });
    });
  }
}

const ORMconnection = new Database({
  host: "r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "awnd1y1gogl85lf7",
  password: "mdhigivzpj0y9dss",
  database: "kyvcibm6naj4vzz8"
});



module.exports = ORMconnection;