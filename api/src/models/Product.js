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
    images: { type: S.TEXT },
    price: { type: S.REAL },
    color: { type: S.STRING },
    stock: { type: S.REAL },
    isEditing: { type: S.BOOLEAN },
  });


  return P;
};

module.exports = Product;


