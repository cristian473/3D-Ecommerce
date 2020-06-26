const { Router } = require("express");
const authRouter = require("./auth.js");
const { Product } = require("../models");
const router = Router();


router.get("/", function (req, res, next) {
  Product.findAll().then(function (product) {
    if (!product) {
      return res.status(404).send("No hay productos en la tienda");
    }
    return res.status(200).json(product);
  });
});

router.get("/:id", function (req, res, next) {
  Product.findByPk(req.params.id).then(function (product) {
    if (!product) {
      return res.status(404).send("Producto Inexistente");
    }
    return res.status(200).json(product);

  });
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  Product.findOrCreate({
    where: { id: req.body.id },
  })
    .then(function (newProduct) {
      return Product.create({
        title: req.body.title,
        urlTitle: req.body.urlTitle,
        description: req.body.description,
        images: req.body.images,
        price: req.body.price,
        color: req.body.color,
      });
    })
    .then(function (newProduct) {
      res.send(newProduct);
    });
})

router.use("/auth", authRouter);



module.exports = router;
