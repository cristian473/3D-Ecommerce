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
        status: {
            type: S.TEXT,
            allowNull: true,
        },
        username: {
            type: S.TEXT,
            isEmail: true,
            allowNull: false,
            unique: true
        },
        password: {
            type: S.STRING,
            allowNull: true,
            // set(value) {
            //     const rSalt = User.randomSalt();
            //     this.setDataValue('salt', rSalt);
            //     this.setDataValue(
            //         'password',
            //         crypto
            //             .createHmac('sha1', this.salt)
            //             .update(value)
            //             .digest('hex'),
            //     );
            // },
        },
        name: { type: S.TEXT },
        lastname: { type: S.TEXT },
    });
    return U;
};

// User.randomSalt = function () {
//     return crypto.randomBytes(20).toString('hex');
// };

// User.prototype.checkPassword = function (password) {
//     return (
//         crypto
//             .createHmac('sha1', this.salt)
//             .update(password)
//             .digest('hex') === this.password
//     );
// };

module.exports = User;