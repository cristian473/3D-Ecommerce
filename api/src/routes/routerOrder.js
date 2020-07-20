const router = require('express').Router();
const { Order } = require("../models");
const { Product } = require("../models");
const { User } = require("../models");
var Sequelize = require('sequelize');
const { response } = require('express');
const { OrderDetails } = require("../models/");
const Op = Sequelize.Op;

// CONSULTA TODAS LAS ORDENES //

router.get("/", (req, res) => {
    
    Order.findAll()
        .then(orders => {
           
            var ordenCompleta = [];
            var pushitems = function(orden,details,user, fin){
                let arrayOrden = [];
                arrayOrden.push(orden) 
                arrayOrden.push(details)
                arrayOrden.push(user)
                
                ordenCompleta.push(arrayOrden)
               
                if (fin === true){
                     console.log(ordenCompleta)
                     res.status(200).json(ordenCompleta)
                }
                
            }
            orders.forEach((orden, index) =>{
                 
                var fin = false;
                let user = User.findAll ({where: {userId : orders[index].userId}})
                let details = OrderDetails.findAll({where: {orderOrderId : orders[index].orderId}})
                Promise.all([user, details])
                    .then(function (values) {
                        let user = values[0];
                        let details = values[1];

                        
                        if (index === orders.length-1){
                            fin = true
                            return pushitems(orders[index], details, user, fin)
                        }

                        return pushitems(orders[index], details, user, fin)
                            
                        
                         
                       
                    })
                    
               
              
            
            })
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
                status: req.body.status,
                address: req.body.direccion,
                tel: req.body.telefono,
                email: req.body.correo

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
           
            OrderDetails.create({
                orderOrderId: order.orderId,
                productId: element.id,
                name: element.name,
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