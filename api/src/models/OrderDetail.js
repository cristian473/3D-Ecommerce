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