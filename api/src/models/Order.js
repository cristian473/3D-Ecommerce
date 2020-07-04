var Sequelize = require('sequelize');
const S = Sequelize;
const Order = (sequelize, S) => {

    const O = sequelize.define("orders", {
        orderId: {
            type: S.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        productId: {
            type: S.INTEGER,
            allowNull: true,
        }
    });
    return O;
};

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