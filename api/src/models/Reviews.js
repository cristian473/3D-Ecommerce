var Sequelize = require('sequelize');
const S = Sequelize;
const Reviews = (sequelize, S) => {

    const PR = sequelize.define("Reviews", {

        idReview: {
            type: S.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        stars: {
            type: S.INTEGER,
            allowNull: false,
        },
        title: {
            type: S.TEXT,
            allowNull: false
        },
        description: {
            type: S.TEXT,
            allowNull: true
        }
    });
    return PR;
};

module.exports = Reviews;

