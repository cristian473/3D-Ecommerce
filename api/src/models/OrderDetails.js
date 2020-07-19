var Sequelize = require('sequelize');
const S = Sequelize;
const OrderDetails = (sequelize, S) => {

    const OD = sequelize.define("orderDetails", {
        orderOrderId: {
            type: S.INTEGER,
            allowNull: true,
            primaryKey: true,

        },
        productId: {
            type: S.INTEGER,
            allowNull: true,
            primaryKey: true,
        },
        name: {
            type: S.TEXT
        },
        amount: {
            type: S.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    });
    return OD;
};

module.exports = OrderDetails;
