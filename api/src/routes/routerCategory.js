const router = require('express').Router();
const { Category } = require("../models");

// AGREGAR - EDITAR - BORRAR Categorias //
router.post("/", function (req, res) {
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

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    Category.destroy({
        where: { categoryId: id }
    }).then(function (product) {
        res.status(200).json({ mensaje: "La categoria ha sido eliminada correctamente", data: product })
    });
});

router.put('/update/:id', function (req, res) {
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

// CONSULTA DE CATEGORIAS //
router.get("/", function (req, res, next) {

  Category.findAll().then(function (categorias) {
      if (!categorias) {
          return res.status(404).send("No hay categorias en el catálogo");
      }
      return res.status(200).json(categorias);
  });
});


module.exports = router;