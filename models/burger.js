const ormSQLFunctions = require("../config/orm");

function getAllBurgers() {
  return ormSQLFunctions.selectAll('burgers');
}

function addBurger(name) {
  return ormSQLFunctions.insertOne('burgers', { burger_name: name });
}

function setBurgerToDevoured(id) {
  return ormSQLFunctions.updateOne('burgers', { devoured: true }, { id });
}

function deleteBurger(id) {
  return ormSQLFunctions.deleteOne('burgers', { id });
}

module.exports = { getAllBurgers, addBurger, setBurgerToDevoured, deleteBurger };