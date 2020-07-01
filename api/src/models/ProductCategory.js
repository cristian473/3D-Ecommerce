var Sequelize = require('sequelize');
const S = Sequelize;
const ProductCategory = (sequelize, S) => {
    const PC = sequelize.define("products_categories", {
        id: {
            type: S.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        // productId: {
        //     type: S.INTEGER,
        //     allowNull: true,
        // },
        // categoryId: {
        //     type: S.INTEGER,
        //     allowNull: true,
        // },
        // name: { type: S.STRING, allowNull: true },

    });
    return PC;
};

module.exports = ProductCategory;