var Sequelize = require('sequelize');
const S = Sequelize;
const Product = (sequelize, S) => {
  const P = sequelize.define("product", {
    id: {
      type: S.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true

    },
    name: { type: S.STRING, allowNull: true },
    description: { type: S.TEXT },
    images: { type: S.BLOB },
    price: { type: S.REAL },
    color: { type: S.STRING },
  });


  return P;
};

module.exports = Product;


