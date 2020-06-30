const { Router } = require("express");
const { Product } = require("../models/");
const { Category } = require("../models/");
const router = Router();

const authRouter = require("./auth.js");
const routerProducts = require("./routerProducts.js");
const routerCategory = require("./routerCategory.js");

router.use("/auth", authRouter);
router.use("/products", routerProducts);
router.use("/category", routerCategory);

module.exports = router;

