const { Router } = require("express");
const router = Router();
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Product } = require("../models/");
const { Category } = require("../models/");

const authRouter = require("./auth.js");
const routerProducts = require("./routerProducts.js");
const routerCategory = require("./routerCategory.js");

router.use("/auth", authRouter);
router.use("/products", routerProducts);
router.use("/category", routerCategory);

Product.belongsToMany(Category, { through: "products_categories" });
Category.belongsToMany(Product, { through: "products_categories" });

module.exports = router;

