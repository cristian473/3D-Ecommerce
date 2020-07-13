const router = require('express').Router();
const { Product } = require("../models/");
const { Category } = require("../models");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const multer = require('multer')





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

var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, '../../public')
      },
      filename: function (req, file, cb) {
        let filename = 'filenametogive';
        req.body.file = filename
  
        cb(null, filename )
      }
})

// const upload = multer({ storage: storage }).single('file');

// var storage = multer.diskStorage({

//     destination: function (req, file, cb) {
  
//       cb(null, '../../public')
//     },
  
  
//     filename: function (req, file, cb) {
  
//       let filename = 'filenametogive';
//        req.body.file = filename
  
//       cb(null, filename)
//     }
//   })
  
var upload = multer({ storage: storage }).single('file');

router.post("/uploadImages", function(req,res){

    
    
    upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                
                return res.status(500).json(err)
            } 
        
            console.log(req.body)
            
        return res.status(200).send(req.body)

    })


})

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
            console.log(values);
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
            console.log(product);
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


module.exports = router;