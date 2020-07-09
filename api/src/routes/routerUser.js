const router = require('express').Router();
const { User } = require("../models");
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

// DELETE USER BY ID
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
//-----

router.get("/:userId/orders", function (req, res, next) {
  const category = req.params.id;
  find = { include: [{ model: Category, where: { categoryId: category } }] };
  Product.findAll(find).then(function (product) {
      if (!product) {
          return res.status(404).send("No hay productos en la tienda");
      }
      return res.status(200).json(product);
  });
});


module.exports = router;