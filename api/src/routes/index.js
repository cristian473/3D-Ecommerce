const { Router } = require("express");
const router = Router();
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Product } = require("../models/");
const { Category } = require("../models/");
const { Order } = require("../models/");
const { User } = require("../models/");
const { OrderDetails } = require("../models/");
const { Reviews } = require("../models/");

const authRouter = require("./auth.js");
const routerProducts = require("./routerProducts.js");
const routerCategory = require("./routerCategory.js");
const routerOrder = require("./routerOrder.js");
const routerUser = require("./routerUser.js");



router.use("/auth", authRouter);
router.use("/products", routerProducts);
router.use("/category", routerCategory);
router.use("/order", routerOrder);
router.use("/user", routerUser);

// RELACIONES ENTRE TABLAS //

Product.belongsToMany(Category, { through: "products_categories" });
Category.belongsToMany(Product, { through: "products_categories" });


Order.belongsToMany(Product, { through: OrderDetails });
Product.belongsToMany(Order, { through: OrderDetails });



Product.belongsToMany(Reviews, { through: 'product_Reviews' });
Reviews.belongsTo(Product, { through: 'product_Reviews' });


User.belongsToMany(Reviews, { through: 'user_review' });
Reviews.belongsTo(User, { through: 'user_review' })




module.exports = router;

