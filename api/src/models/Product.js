const Product = (sequelize, S) => {
  const P = sequelize.define("product", {
    id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: S.STRING, allowNull: false },
    urlTitle: { type: S.STRING, allowNull: false },
    route: {
      type: S.VIRTUAL,
      get() {
        return "/product/" + this.getDataValue("urlTitle");
      },
    },
    description: { type: S.TEXT },
    images: { type: S.BLOB },
    precio: { type: S.REAL },
    color: { type: S.STRING },
  });

  P.addHook("beforeValidate", (product) => {
    product.urlTitle = product.title.replace(/\s+/g, "_").replace(/\W/g, "");
  });

  return P;
};

// Product.sync({ force: true }).then(function () {
//   return Product.create({
//     title: "",
//     description: "",
//     images: "",
//     price: "",
//     color: "",
//   });
// });

// const Category = (sequelize, S) => {
//   const C = sequelize.define("category", {
//     id: {
//       type: S.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: { type: S.STRING, allowNull: false },
//   });

//   return C;
// };

// Product.belongsTo(Category, { as: "author" });

module.exports = () => {
  Product;
};
