const router = require('express').Router();
const { User } = require("../models");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { propfind } = require('./auth');
const { response } = require('express');

router.use(passport.initialize());
router.use(passport.session());



// passport.use(new LocalStrategy(
//     function (username, password, done) {
//         console.log(username);
//         console.log(password);
//         if (username === "aguspagano" && password === "discoplus") {
//             return done(null, { id: 1, name: "Agustin" })
//             done(null, false);
//         }
//     }))

passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log(username);
        console.log(password);
        User.findOne({ where: { username: username } })
            .then(function (user, err) {
                console.log(user);
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.checkPassword(password)) { return done(null, false); }
                return done(null, user);
            })
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.userId)
})

// passport.deserializeUser(function (id, done) {
//     done(null, { userId: id, name: "Agustin" })
// })

passport.deserializeUser(function (id, done) {
    User.findByPk(id)
        .then(user => {
            done(null, user);
        })
        .catch(err => done(err));
});

// S63 - RUTA PARA LOGIN //

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.send('Hola');
    });

router.post('/changepassword');

router.get('/logout');

router.post('/register');

router.get('/me');

router.put('/promote');

module.exports = router;
