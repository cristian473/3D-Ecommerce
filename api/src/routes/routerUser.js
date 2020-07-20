const router = require('express').Router();
const { User } = require("../models");
const { Product } = require("../models/");
const { Order } = require("../models/");
const { OrderDetails } = require("../models/");
var Sequelize = require('sequelize');
const { propfind } = require('./auth');
const { response } = require('express');
const Op = Sequelize.Op;
// const OrderDetails = require('../models/OrderDetails');

// 36 - OBTENER TODOS LOS USUARIOS //

router.get("/", (req,res) => {
  User.findAll()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(function(err) {
    res.status(400).json({message:"Ocurrió un error o no hay usuarios registrados"})
  })
})

// AGREGRAR USUARIOS //

// AGREGRAR USUARIOS //
router.post("/", function (req, res) {
    User.create({
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
// MODIFICAR USUARIOS //

router.put("/update", function (req, res) {
    var tipo = 'admin' 
    console.log(req.body)
    if (req.body.type === 'admin'){
        tipo = 'client';
    }
    User.update({
        type: tipo,
    }, {
       returning: true, where: {userId : req.body.userId}
    })
        .then(function (newUser) {
            res.send({ message: "user Updated", newUser });
        })
        .catch(function (err) {
            console.log(err)
        })
})

// S-36 TRAER TODOS LOS USUARIOS //

router.get("/", function (req, res, next) {
    User.findAll()
        .then(function (user) {
            if (!user) {
                return res.status(404).send("No hay usuarios registrados");
            }
            return res.status(200).json(user);
        });
});

// BUSCAR UN USUARIO

router.get("/:id", function (req, res) {
    User.findByPk(req.params.id).then(function (user) {
        if (!user) {
            return res.status(404).send("Usuario Inexistente");
        }
        return res.status(200).json(user);

    });
});

// 37 - BORRAR USUARIOS

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then((result) => {
            return User.destroy({
                where: { userId: id }
            }).then((user) => {
                res.status(200).json({ mensaje: "El Usuario ha sido eliminado correctamente", data: result })
            })
        })
});

// AGREGRAR PRODUCTOS AL CARRITO //
router.post("/:idUser/cart", (req, res) => {
    let order = Order.findOrCreate({ amount: req.body.amount, where: { userId: req.params.idUser, status: "carrito" } });
    let product = Product.findByPk(req.body.productId);
    Promise.all([order, product])
        .then(function (values) {
            let ord = values[0][0];
            let prod = values[1];
            // console.log(ord);
            // console.log(prod);
            prod.addOrder(ord)
                .then(() => {
                    Order.findByPk(ord.orderId, { include: [Product] })
                        .then((op) => res.status(200).json({ message: "El producto fue agregado al carrito", }))
                })
                .catch(function (err) {
                    res.status(400).json({ message: "No se agregó el producto al carrito", error: err })
                })
        })
})
// MODIFICAR CANTIDADES DE PRODUCTO EN CARRITO //
router.put('/:userId/:productId', async (req, res) => {
    let order = Order.findOne({ where: { userId: req.params.userId, status: "carrito" } });
    let product = Product.findByPk(req.params.productId);
    Promise.all([order, product])
        .then(function (values) {
            let ord = values[0];
            let prod = values[1];
            // console.log(values);
            OrderDetails.update({
                amount: req.body.amount
            }, {
                returning: true, where: { orderOrderId: ord.orderId, productId: prod.id }
            })
                .then(function ([registrosUpdated, [productUpdated]]) {
                    return res.status(200).json({ message: "Su carrito fue actualizado", productUpdated });
                })
        })
})
// VACIAR CARRITO //
// REF: pasar por body el nuevo "status" del carrito como "carritoVaciado"
router.put('/:userId/cart', (req, res) => {
    Order.findOne({ where: { userId: req.params.userId, status: "carrito" } })
        .then(function (order) {
            Order.update({ status: req.body.status }, { where: { orderId: order.orderId } })
                .then(
                    res.status(200).json({ message: "El carrito fue vaciado" })
                )
        })
        .catch(function (err) {
            res.status(400).json({ message: "No se pudo vaciar el carrito.", error: err })
        })
})

// 39 - MUESTRA TODOS LOS PRODUCTOS DEL CARRITO 

router.get('/:userId/cart', (req, res) => {
    Order.findOne({ where: { userId: req.params.userId, status: "carrito" } })
        .then(orden => {
            OrderDetails.findAll({ where: { orderOrderId: orden.orderId } })
                .then(response => { res.status(200).json(response) })
        })
})
// 45 - TRAER TODAS LAS ORDENES DE UN USUARIO
router.get('/:userId/orders', (req, res) => {
    Order.findAll({ where: { userId: req.params.userId } })
        .then(ordenes => {
            res.status(200).json(ordenes);
        })
})




module.exports = router;