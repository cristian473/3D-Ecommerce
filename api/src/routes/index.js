const { Router } = require("express");
const authRouter = require("./auth.js");
const { Product } = require("../models");
const router = Router();

router.get("/", function (req, res, next) {
  Product.findAll({}).then(function (product) {
    if (!product) {
      return res.status(404).send("No hay productos en la tienda");
    }
    res.render("Producto", { product });
  });
});

router.get("/:id", function (req, res, next) {
  Product.findByPk(req.params.id).then(function (product) {
    if (!product) {
      return res.status(404).send("Producto Inexistente");
    }
    res.render("Producto", { product });
  });
});

router.post("/", function (req, res, next) {
  Product.findOrCreate({
    where: { id: req.body.id },
  })
    .then(function (newProduct) {
      return newProduct.create({
        title: req.body.title,
        urlTitle: req.body.urlTitle,
        description: req.body.description,
        images: req.body.images,
        price: req.body.price,
        color: req.body.color,
      });
    })
    .then(function (newProduct) {
      res.redirect(newProduct.urlTitle);
    });
  // .then(function (newProduct) {
  //   res.redirect(JSON.parse(newProduct.urlTitle));
  // });
});

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use("/auth", authRouter);
// router.use('/products', productRouter);

module.exports = router;
