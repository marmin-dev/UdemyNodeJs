const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

app.get("/Users", (req, res, next) => {
  res.render("users", {
    pageTitle: "Users",
    users: users,
    userExist: users.length > 0,
  });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  console.log(users);
  res.redirect("/users");
});

app.listen(3000);
