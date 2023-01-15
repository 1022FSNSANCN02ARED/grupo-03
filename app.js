const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require("./routers/mainRouter")

app.listen(3000, () => console.log("servidor corrinedo en el puerto 3000"));

const publicPath = path.join(__dirname, "/public");
app.use(express.static(publicPath));

app.use(mainRouter)