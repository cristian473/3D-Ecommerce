const router = require('express').Router();
const { User } = require("../models");
const { Product } = require("../models/");
const { Order } = require("../models/");
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

// AGREGRAR PRODUCTOS AL CARRITO //

router.post("/:idUser/cart", (req, res) => {
    let order = Order.findOrCreate({ where: { userId: req.params.idUser, status: "carrito" } });
    let product = Product.findByPk(req.body.productId);
    Promise.all([order, product])
        .then(function (values) {
            let ord = values[0].dataValues;
            let prod = values[1];
            console.log(values[0]);
            console.log(values[1]);
            prod.addOrders(ord)
                .then(() => {
                    Order.findByPk(ord, { include: [Product] })
                        .then((op) => res.status(200).json({ message: "El producto fue agregado al carrito", op }))
                })
                .catch(function (err) {
                    res.status(400).json({ message: "No se agregó el producto al carrito", error: err })
                })
        })

})

module.exports = router;