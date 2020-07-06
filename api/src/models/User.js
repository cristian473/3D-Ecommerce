var Sequelize = require('sequelize');
const S = Sequelize;
const User = (sequelize, S) => {
    const U = sequelize.define("users", {
        userId: {
            type: S.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true

        },
        type: { type: S.STRING, allowNull: true },
        username: {
            type: S.TEXT,
            isEmail: true,
            allowNull: false,
            unique: true
        },
        password: {
            type: S.VIRTUAL,
        },
        name: { type: S.TEXT },
        lastname: { type: S.TEXT },
    });
    return U;
};

module.exports = User;