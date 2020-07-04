var Sequelize = require('sequelize');
const S = Sequelize;
const OrderDetail = (sequelize, S) => {

    const OD = sequelize.define("orderDetails", {
        id: {
            type: S.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        qty: { type: S.REAL },
        price: { type: S.REAL }
    });
    return OD;
};
module.exports = OrderDetail;

  const OL = sequelize.define("order_details", {
    id: {
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

