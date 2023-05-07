module.exports = {
    showForm: (req, res) => {
        const formType = req.session.formType;
        const errores = req.session.errores;
        const oldData = req.session.oldData;
        req.session.formType = null;
        req.session.errores = null;
        req.session.oldData = null;

        console.log(formType);

        res.render("create-product-form", { formType, errores, oldData });
    },
};
