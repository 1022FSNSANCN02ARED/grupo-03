const path = require("path");

const express = require("express");
const app = express();

app.listen(3000, () => console.log("servidor corrinedo en el puerto 3000"));

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.set("views", "src/views");

app.use(express.urlencoded({ extended: false }));

const mainRouter = require("./routers/mainRouter");
app.use(mainRouter);
