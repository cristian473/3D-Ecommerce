const Product = (sequelize, S) => {
  const P = sequelize.define("product", {
    id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: S.STRING, allowNull: true },
    urlTitle: { type: S.STRING, allowNull: true },
    route: {
      type: S.VIRTUAL,
      get() {
        return "/product/" + this.getDataValue("urlTitle");
      },
    },
    description: { type: S.TEXT },
    images: { type: S.BLOB },
    price: { type: S.REAL },
    color: { type: S.STRING },
  });

  P.addHook("beforeValidate", (product) => {
    product.urlTitle = product.title.replace(/\s+/g, "_").replace(/\W/g, "");
  });

  return P;
};

module.exports = Product;


