module.exports = (req, res, next) => {
    if (req.session.userLog?.rol.name == "admin") {
        next();
    } else {
        res.redirect("/");
    }
};
