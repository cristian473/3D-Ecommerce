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
            let ord = values[0][0];
            let prod = values[1];
            console.log(ord);
            console.log(prod);
            prod.addOrder(ord)
                .then(() => {
                    Order.findByPk(ord.orderId, { include: [Product] })
                        .then((op) => res.status(200).json({ message: "El producto fue agregado al carrito", op }))
                })
                .catch(function (err) {
                    res.status(400).json({ message: "No se agregó el producto al carrito", error: err })
                })
        })

})

// VACIAR CARRITO //

// REF: pasar por body el nuevo "status" del carrito como "carritoVaciado"

router.put('/:userId/cart', (req, res) => {
    Order.findOne({ where: { userId: req.params.userId, status: "carrito" } })
        .then(function (order) {
            console.log(order)
            Order.update({ status: req.body.status }, { where: { orderId: order.orderId } })
                .then(
                    res.status(200).json({ message: "el carro se vació" })
                )
        })
        .catch(function (err) {
            res.status(400).json({ message: "No se pudo vaciar el carro.", error: err })
        })
})



module.exports = router;