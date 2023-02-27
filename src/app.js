const path = require("path");

const express = require("express");
const app = express();

const session = require("express-session");
const methodOverride = require("method-override");

app.listen(3000, () => console.log("servidor corrinedo en el puerto 3000"));

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "./views"));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(
    session({
        secret: "Un mensaje secreto",
        resave: false,
        saveUninitialized: false,
    })
);

const mainRouter = require("./routers/mainRouter");
app.use(mainRouter);
