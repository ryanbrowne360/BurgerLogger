// Import MySQL connect.
var connect = require("./connection.js");



function selectAll(table) {
  return connect.query('SELECT * FROM ??', [table]);
}

function selectOne(table, condition) {
  return connect.query('SELECT * FROM ?? WHERE ?', [table, condition]);
}

function insertOne(table, fieldValMap) {
  return connect.query('INSERT INTO ?? SET ?', [table, fieldValMap]);
}

function updateOne(table, fieldValMap, condition) {
  return connect.query('UPDATE ?? SET ? WHERE ?', [table, fieldValMap, condition]);
}

function deleteOne(table, condition) {
  return connect.query('DELETE FROM ?? WHERE ?', [table, condition]);
}

function close() {
  return connect.close()
}

module.exports = { selectAll, selectOne, insertOne, updateOne, deleteOne, close };
