const db = require("../database/models");

module.exports = async (req, res, next) => {
    if (req.cookies?.userLogInCookie && !req.session.userLog) {
        const emailUserInCookie = req.cookies.userLogInCookie;
        const userLog = await db.Users.findOne({
            where: {
                email: emailUserInCookie,
            },
        });
        req.session.userLog = userLog;
        // Vuelve a "crear" la cookie, para reiniciar su tiempo de vida.
        res.cookie("userLogInCookie", userLog.email, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
    }
    next();
};
