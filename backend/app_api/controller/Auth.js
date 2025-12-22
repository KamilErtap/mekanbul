const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("user");
const createResponse = function (res, status, content) {
     res.status(status).json(content);
};
const signUp = async function (req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        createResponse(res, 400, {status: "Tüm alanlar gerekli!"} );
    }
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    try {
        await user.save().then((newUser) => {
            let generatedToken = newUser.generateToken();
            createResponse(res, 200, {token: generatedToken});
        });
    } catch (error) {
         createResponse(res, 400, {status:"Kayit basarisiz!"});
    }
};
const login = async function (req, res) {
    if (!req.body.email || !req.body.password) {
        createResponse(res, 400, {status: "Tüm alanlar gerekli!"});
    }
    passport.authenticate("local", (currentUser) => {
        if (currentUser) {
            let generatedToken = currentUser.generateToken();
            createResponse(res, 200, {token: generatedToken});
        }else {
            createResponse(res, 400, {status: "Kullanici adi veya sifre hatali!"});
        }
    })(req, res);
};
module.exports = {signUp, login};