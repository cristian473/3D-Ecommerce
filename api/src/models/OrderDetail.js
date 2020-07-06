var Sequelize = require('sequelize');
const S = Sequelize;
const OrderDetail = (sequelize, S) => {

const OL = sequelize.define("order_details", {
    orderId: {
      type: S.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    amount: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: 1,
    },
  });
  return OL;
};

module.exports = OrderDetail;

