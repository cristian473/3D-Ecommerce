const { Router } = require("express");
const authRouter = require("./auth.js");
const { Product } = require("../models");
const router = Router();


router.get("/products/", function (req, res, next) {
  Product.findAll().then(function (product) {
    if (!product) {
      return res.status(404).send("No hay productos en la tienda");
    }
    return res.status(200).json(product);
  });
});

router.get("/products/:id", function (req, res) {
  Product.findByPk(req.params.id).then(function (product) {
    if (!product) {
      return res.status(404).send("Producto Inexistente");
    }
    return res.status(200).json(product);

  });
});

router.post("/products/", function (req, res) {
  Product.create({
    title: req.body.title,
    urlTitle: req.body.urlTitle,
    description: req.body.description,
    images: req.body.images,
    price: req.body.price,
    color: req.body.color,
  },
    { fields: ['title', 'urlTite', 'description', 'images', 'price', 'color'] })
    .then(function (newProduct) {
      res.send(newProduct);
    })
    .catch(function (err) {
      console.log(err)
    })
});

router.put('/products/update/:id', function (req, res) {
  Product.update(
    {
      title: req.body.title,
      urlTitle: req.body.urlTitle,
      description: req.body.description,
      images: req.body.images,
      price: req.body.price,
      color: req.body.color
    },
    { where: { id: req.params.id }, returning: true }
  )
    .then(function (product) {
      res.status(200).json({ mensaje: "El Producto ha sido actualizado correctamente", data: product })
    })
  // .catch(function (reason) {
  //   res.status(400).json({ mensaje: "El Producto no pudo ser actualizado", data: reason })
  // })
})


router.delete('/products/delete/:id', (req, res) => {
  const id = req.params.id;
  Product.destroy({
    where: { id: id }
  }).then(deletedProduct => {
    res.json(deletedProduct);
  }).catch(res.send);
});

router.use("/auth", authRouter);

module.exports = router;
