const router = require('express').Router();
const { Order } = require("../models");
const { Product } = require("../models");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

// AGREGRAR PRODUCTOS DE CARRITO //

router.post("/", (req, res) => {
    const productId = req.body.productId;

    Order.findByPk(req.body.orderId)

        .then(function (orden) {
            console.log(orden);
            let order = orden;
            order.addProduct(productId)
        })
        .then(() => {
            Order.findByPk(req.params.orderId, { include: [Product] })
                .then((orderProduct) => res.status(200).json({ message: "El producto fue agregado al carrito", orderProduct }))
        })
        .catch(function (err) {
            res.status(400).json({ message: "No se pudo agregar el producto al carrito", error: err })
        })
});




module.exports = router;