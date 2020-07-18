const router = require('express').Router();
const { Order } = require("../models");
const { Product } = require("../models");
var Sequelize = require('sequelize');
const { response } = require('express');
const { OrderDetails } = require("../models/");
const Op = Sequelize.Op;

// CONSULTA TODAS LAS ORDENES //

router.get("/", (req, res) => {
    Order.findAll()
        .then(orders => {
            res.status(200).json(orders)
        })
        .catch(function (err) {
            res.status(400).json({ message: "ocurrió un error o no hay registro de ordenes hechas" })
        })
})

// 46 - RETORNA UNA ORDEN POR ID

router.get("/:id", (req, res) => {
    OrderDetails.findAll({ where: { orderOrderId: req.params.id } })
        .then(orders => {
            res.status(200).json(orders)
        })
        .catch(function (err) {
            res.status(400).json({ message: "ocurrio un error" })
        })
})

// 47 - MODIFICAR ESTADO DE UNA ORDEN

router.put("/:id", (req, res) => {
    Order.findByPk(req.params.id)
        .then(order => {
            Order.update({
                status: req.body.status
            }, {
                returning: true, where: { orderId: req.params.id }
            })
                .then(function (orderUpdated) {
                    return res.status(200).json({ message: "El estado de la orden ha sido cambiado a : " + req.body.status, orderUpdated });
                })
        })
})

router.post("/:userId", function (req, res) {
    console.log(req.body);
    var confirmation = false;
    Order.create({
        userId: req.params.userId,
        status: "checkout"
    }).then(function (order) {
        var products = req.body;
        products.forEach(element => {
            var count = count + 1
            console.log(count);
            OrderDetails.create({
                orderOrderId: order.orderId,
                productId: element.id,
                amount: element.stock,
            }).then(function () {
                confirmation = true
            })
                .catch(function (err) {
                    confirmation = false
                })
        });
        if (confirmation == true) {
            res.send({ message: "Se hizo el checkout" })
        }
        res.send({ message: "No se hizo el checkout" })
    })
})

module.exports = router;