var Sequelize = require('sequelize');
const S = Sequelize;
const Category = (sequelize, S) => {
    const C = sequelize.define("category", {
        categoryId: {
            type: S.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true

        },
        name: { type: S.STRING, allowNull: true },

    });
    return C;
};

module.exports = Category;