const router = require('express').Router();
const { Order } = require("../models");
const { Product } = require("../models");
var Sequelize = require('sequelize');
const { response } = require('express');
const { OrderDetails } = require("../models/");
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

router.get("/orders/:userId", (req, res) =>{

    Order.findAll({where: {userId:req.params.userId, status: req.body.status}})
        .then(orders =>{
            res.status(200).json({message: "ordenes en estado "+req.body.status, orders})
        })
        .catch(function (err){
            res.status(400).json({message: "no tiene ordenes en estado "+req.body.status})
        })

})

router.get("/allorders", (req,res) =>{

    Order.findAll()
        .then(orders =>{
            res.status(200).json(orders)
        })
        .catch(function(err){
            res.status(400).json({message:"ocurrió un error o no hay registro de ordenes hechas"})
        })

})

router.get("/onlyorder/:id", (req,res)=>{

    OrderDetails.findAll({where: {orderOrderId: req.params.id}})
        .then(orders=>{
            res.status(200).json(orders)
        })
        .catch(function(err){
            res.status(400).json({message: "ocurrio un error"})
        })

})

router.put("/changeorder/:id", (req,res)=>{

    Order.findAll({where:{orderId:req.params.id}})
        .then(order =>{
            Order.update({
                status: req.body.status
            }, {
                returning: true, where: { orderId: req.params.id }
            })
                .then(function (orderUpdated) {

                    return res.status(200).json({ message: "Estado de orden actualizada a "+ req.body.status, orderUpdated });
                })
        
        })

})





module.exports = router;