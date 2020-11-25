// Import MySQL ORMconnection.
var ORMconnection = require("./connection.js");

function selectAll(table) {
  return ORMconnection.query('SELECT * FROM ??', [table]);
}

function selectOne(table, condition) {
  return ORMconnection.query('SELECT * FROM ?? WHERE ?', [table, condition]);
}

function insertOne(table, fieldValMap) {
  return ORMconnection.query('INSERT INTO ?? SET ?', [table, fieldValMap]);
}

function updateOne(table, fieldValMap, condition) {
  return ORMconnection.query('UPDATE ?? SET ? WHERE ?', [table, fieldValMap, condition]);
}

function deleteOne(table, condition) {
  return ORMconnection.query('DELETE FROM ?? WHERE ?', [table, condition]);
}

function close() {
  return ORMconnection.close()
}

module.exports = { selectAll, selectOne, insertOne, updateOne, deleteOne, close };
