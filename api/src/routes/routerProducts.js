const router = require('express').Router();
const { Product } = require("../models/");
const { Category } = require("../models");
const { Reviews } = require("../models")
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const multer = require('multer');
const { response } = require('express');



// CONSULTA DE PRODUCTOS //
router.get('/search', function (req, res) {
    const productName = req.query.keyword;
    Product.findAll(
        {
            where: {
                name: {
                    [Op.like]: `%${productName}%`
                }
            }
        })
        .then(function (product) {
            if (!product) {
                return res.status(404).send("Producto Inexistente");
            }
            return res.status(200).json(product);
        });
});

router.get("/", function (req, res, next) {
    Product.findAll({ include: [{ model: Category }] }).then(function (product) {
        if (!product) {
            return res.status(404).send("No hay productos en la tienda");
        }
        return res.status(200).json(product);
    });
});

router.get("/category/:id", function (req, res, next) {
    const category = req.params.id;
    find = { include: [{ model: Category, where: { categoryId: category } }] };
    Product.findAll(find).then(function (product) {
        if (!product) {
            return res.status(404).send("No hay productos en la tienda");
        }
        return res.status(200).json(product);
    });
});

router.get("/:id", function (req, res) {
    Product.findByPk(req.params.id).then(function (product) {
        if (!product) {
            return res.status(404).send("Producto Inexistente");
        }
        return res.status(200).json(product);

    });
});
// AGREGAR - EDITAR - BORRAR Productos //
router.post("/", function (req, res) {

    Product.create({
        name: req.body.name,
        description: req.body.description,
        images: req.body.images,
        price: req.body.price,
        color: req.body.color,
        stock: req.body.stock
    })
        .then(function (newProduct) {
            res.send({ message: "El producto ha sido agregado al catálogo", newProduct });
        })
        .catch(function (err) {
            console.log(err)
        })
})

// EDITAR PRODUCTOS //

router.put('/update/:id', async (req, res) => {

    Product.findByPk(req.params.id).then(function (product) {
        if (!product) {
            return res.status(404).send("Id inválido, no se pudo modificar el producto");
        }
        else {
            Product.update({
                name: req.body.name,
                description: req.body.description,
                images: req.body.images,
                price: req.body.price,
                color: req.body.color,
                stock: req.body.newStock
            }, {
                returning: true, where: { id: product.id }
            }
            ).then(function ([registrosUpdated, [productUpdated]]) {
                return res.status(200).json({ message: "El producto fue actualizado correctamente", productUpdated });
            })
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    Product.findByPk(id)
        .then((result) => {
            return Product.destroy({
                where: { id: id }
            }).then((product) => {
                res.status(200).json({ mensaje: "El producto ha sido eliminado correctamente", data: result })
            })
        })

});


// AGREGAR - BORRAR Categorias de Productos//
router.post('/add/:idProd/:idCat', (req, res) => {
    let product = Product.findByPk(req.params.idProd)
    let category = Category.findByPk(req.params.idCat)
    Promise.all([product, category])
        .then(function (values) {
            let prod = values[0];
            let cat = values[1];
            prod.addCategory(cat)
                .then(() => {
                    Product.findByPk(req.params.idProd, { include: [Category] })
                        .then((pc) => res.status(200).json({ message: "La categoría fue agregada al producto", pc }))
                })
        }).catch(function (err) {
            res.status(400).json({ message: "No se agregó la categoría al producto", error: err })
        })
})

router.delete("/remove/:idProd/:idCat", (req, res) => {
    const categoryId = req.params.idCat;
    Product.findByPk(req.params.idProd)

        .then(function (product) {
            let prod = product;
            prod.removeCategories(categoryId)
        })
        .then(function (deletedCategory) {
            res.status(200).json({ message: "La categoria ha sido eliminada correctamente", data: deletedCategory })
        })
        .catch(function (err) {
            res.status(400).json({ message: "No se agregó la categoría al producto", error: err })
        })
});

//RUTAS DE REVIEWS

router.post("/:id/review", (req, res) => {

    const idProduct = req.params.id;

    Reviews.create({
        productId: idProduct,
        userUserId: req.body.userId,
        stars: req.body.stars,
        title: req.body.title,
        description: req.body.description,
    })
        .then(function (review) {
            res.send({ message: "La review " + req.body.title + " se agregó con exito", review });
        })
        .catch(function (err) {
            res.status(400).send({ message: "ocurrió un error!", err })
            console.log(err)
        })



})


router.delete("/:id/review/:idReview", (req, res) => {

    const idReview = req.params.idReview;

    Reviews.findByPk(idReview)
        .then((result) => {
            return Reviews.destroy({
                where: { idReview: result.idReview }
            }).then((response) => {
                res.status(200).json({ mensaje: "la review (" + result.title + ") ha sido eliminada correctamente", result })
            })
        })
})


router.get("/:id/review", (req, res) => {

    Reviews.findAll()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(function (err) {
            res.send(err)
        })
})


router.get("/productreviews/:id", (req, res) => {

    Reviews.findAll({ where: { productId: req.params.id } })
        .then(response => {
            res.status(200).json(response)
        })
        .catch(function (err) {
            console.log(err)
            res.send(err)
        })
})

router.put("/:id/review/:idReview", (req, res) => {

    const idReview = req.params.idReview;

    Reviews.findByPk(idReview)
        .then(review => {
            Reviews.update({

                title: req.body.title,
                description: req.body.description,
                stars: req.body.stars

            }, {
                returning: true, where: { idReview: review.idReview }
            }).then(result => {
                res.status(200).json({ message: "review modificada con exito!", result })
            })
        })
        .catch(function (err) {
            res.send(err)
        })



})



module.exports = router;