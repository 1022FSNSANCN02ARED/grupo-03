const path = require("path");


module.exports = {
    home: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"))
    },
    product: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/productDetail.html"))
    },
    register: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/register.html"))
    },
    productCart: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/productCart.html"))
    },
    login: (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/login.html"))
    },
}