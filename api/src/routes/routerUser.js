const router = require('express').Router();
const { User } = require("../models");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

// AGREGRAR USUARIOS //

router.post("/", function (req, res) {
    { console.log(req.body) }
    User.create({
        type: req.body.type,
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname,
    })
        .then(function (newUser) {
            res.send({ message: "Se ha creado el Usuario con éxito", newUser });
        })
        .catch(function (err) {
            console.log(err)
        })
})



module.exports = router;