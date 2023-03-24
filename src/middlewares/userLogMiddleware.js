module.exports = (req, res, next) => {
    // res.locals sirve para crear una variable local que sirva en todas las vistas.
    // usa un "if" para saber si la variable local no existe.
    if (!res.locals.userLog) {
        // si no existe le pasamos lo que se vaya a crear en session.userLog.
        // si session.userLog no existe, la variable local va a ser "false".
        res.locals.userLog = req.session.userLog;
    }
    next();
};
