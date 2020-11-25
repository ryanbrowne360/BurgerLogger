const express = require("express")
const PORT = process.env.PORT || 8080
const app = express()
var exphbs = require("express-handlebars");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgcontroller.js");

 app.use(routes);

app.listen(PORT, function() {
 
  console.log("Server listening on: http://localhost:" + PORT);
});
