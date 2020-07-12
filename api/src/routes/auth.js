const server = require('express').Router();
const { User } = require('../models/User');



server.post('/changepassword');

server.post('/login');

// S63 - RUTA PARA LOGIN //

server.put('/login', async (req, res) => {

    User.findOne(req.body.username).then(function (user) {
        if (!user) {
            return res.status(404).send("Usuario no encontrado");
        }
        else {
            User.update({
                status: "logged",
            }, {
                returning: true, where: { userId: user.userId }
            }
            ).then(function ([userStatus]) {
                return res.status(200).json({ message: "El usuario fue loggeado", userStatus });
            })
        }
    })
});

server.get('/logout');

server.post('/register');

server.get('/me');

server.put('/promote');

module.exports = server;
