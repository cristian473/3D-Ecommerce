const router = require('express').Router();
const { Product } = require("../models/");
const { Category } = require("../models");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
    const category = req.body.categories;
    if (category) {
        find = { include: [{ model: Category, where: { categoryId: category } }] };
    }
    else {
        find = {};
    }
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

router.post("/", function (req, res) {
    Product.create({
        name: req.body.name,
        description: req.body.description,
        images: req.body.images,
        price: req.body.price,
        color: req.body.color,
    },
        { fields: ['name', 'description', 'images', 'price', 'color'] })
        .then(newProduct => {
            newProductId = newProduct.id;
            return req.body.categories.map(category => {
                return newProduct.addCategory(category);
            });
        })
        .then(categories => {
            return Promise.all(categories)
        })
        .then(function (newProduct) {
            res.send(newProduct);
        })
        .catch(err => res.status(500).send(err))
});

router.put('/update/:id', function (req, res) {
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

router.delete("/remove/:id", (req, res) => {
    const categoryId = req.body.categories;
    Product.findByPk(req.params.id)
        .then(function (product) {
            console.log(product);
            let prod = product;
            prod.removeCategories(categoryId)
        })
        .then(function (deletedCategory) {
            res.status(200).json({ mensaje: "La categoria ha sido eliminada correctamente", data: deletedCategory })
        })
});


module.exports = router;