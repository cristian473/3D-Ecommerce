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
        userId: {
            type: S.INTEGER,
            allowNull: true,
        },
        status: {
            type: S.TEXT,
            allowNull: true,
        }
    });
    return O;
};

module.exports = Order;
