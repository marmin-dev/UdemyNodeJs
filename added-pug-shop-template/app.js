const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const handleBars = require("express-handlebars");

// ejs 는 템플릿에서 사용하는 자바스크립트와 관련된 코드이다
app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found !!" });
});

app.listen(3000);
