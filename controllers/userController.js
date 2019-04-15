const userModal = require('../models/userModel')

module.exports = {

    welcome: (req, res) => {
        res.send("WELCOME")
    },

    signUp: (req, res) => {
        if (req.body.name != "" && req.body.email != "" && req.body.password != "") {
            userModal.user.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }).then((user) => {
                res.send(user);
            }).catch((err) => {
                res.send(err)
            });
        } else {
            res.send("NAME OR EMAIL OR PASSWORD MISSING")
        }
    },

    signIn: (req, res) => {
        userModal.user.find({
            email: req.body.email,
            password: req.body.password,
        }).then((user) => {
            if (user.length > 0) {
                res.send(user);
            }
            else {
                res.send({
                    message: "User Not Found"
                })
            }
        }).catch((err) => {
            res.send(err)
        });
    }
}