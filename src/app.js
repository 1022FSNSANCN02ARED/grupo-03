const path = require("path");

const express = require("express");
const app = express();

const session = require("express-session");
const methodOverride = require("method-override");

const cookieParser = require("cookie-parser");



const cors = require("cors");
app.use(
    cors({
        origin: "*",
    })
);

app.listen(3000, () => console.log("servidor corrinedo en el puerto 3000"));

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "./views"));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(cookieParser("Una clave muy secreta"));

app.use(
    session({
        secret: "Un mensaje secreto",
        resave: false,
        saveUninitialized: false,
    })
);

const userLogMiddleware = require("./middlewares/userLogMiddleware");
const loginUserInCookie = require("./middlewares/loginUserInCookie");
app.use(loginUserInCookie);
app.use(userLogMiddleware);

const mainRouter = require("./routers/mainRouter");
app.use(mainRouter);

const productsRouter = require("./routers/productsRouter");
app.use(productsRouter);

//error404
app.use((req,res,next)=>{
    res.status(404).render('error404')
});

//PRUEBA DE MODELOS DB

/*const db = require("./database/models");
db.Cottages.findAll().then((cottage) => {
    console.log(cottage);
});*/
