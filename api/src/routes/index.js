const { Router } = require("express");
const { Product } = require("../models/");
const { Category } = require("../models/");
const router = Router();
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const authRouter = require("./auth.js");
router.use("/auth", authRouter);


// ---------------------------------------------------------------------
// RUTAS PRODUCTOS
// ---------------------------------------------------------------------
router.get("/products", function (req, res, next) {

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

router.get('/products/search', function (req, res) {
  const productName = req.query.keyword;
  Product.findAll(
    {
      where: {
        name: {
          [Op.like]: `%${productName}`
        }
      }
    }
  )
    .then(function (product) {
      if (!product) {
        return res.status(404).send("Producto Inexistente");
      }
      return res.status(200).json(product);

    });
});

router.post("/products/", function (req, res) {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    images: req.body.images,
    price: req.body.price,
    color: req.body.color,
  },
    { fields: ['name', 'description', 'images', 'price', 'color'] })
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
      name: req.body.name,
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
})

router.delete('/products/delete/:id', (req, res) => {
  const id = req.params.id;
  Product.destroy({
    where: { id: id }
  }).then(deletedProduct => {
    res.json(deletedProduct);
  }).catch(res.send);
});

//---------------------------------------------------------------------
// RUTAS CATEGORIAS
// ---------------------------------------------------------------------

router.post("/category/", function (req, res) {
  Category.create({
    name: req.body.name,
  },
    { fields: ['name'] })
    .then(function (newCategory) {
      res.send(newCategory);
    })
    .catch(function (err) {
      console.log(err)
    })
});

router.delete("/category/delete/:id", (req, res) => {
  const id = req.params.id;
  Category.destroy({
    where: { categoryId: id }
  }).then(deletedCategory => {
    res.json(deletedCategory);
  }).catch(res.send);
});

router.put('/category/update/:id', function (req, res) {
  Category.update(
    {
      name: req.body.name,
    },
    { where: { categoryId: req.params.id }, returning: true }
  )
    .then(function (product) {
      res.status(200).json({ mensaje: "La categoria ha sido actualizada correctamente", data: product })
    })
})

module.exports = router;

