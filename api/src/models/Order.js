var Sequelize = require('sequelize');
const S = Sequelize;
const Order = (sequelize, S) => {
  const C = sequelize.define("order", {
    id: {
      type: S.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },
  });

  return C;
};

module.exports = Order;