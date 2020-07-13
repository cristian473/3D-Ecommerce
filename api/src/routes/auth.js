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

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ where: { username: username } })
            .then(function (user, err) {
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
<<<<<<< HEAD
        res.redirect('/');
=======
        res.status(200);
>>>>>>> 02e0d040c3efd57f5b2df2a2d558393b6bbb0c24
    });

router.post('/changepassword');

router.get('/logout');

router.post('/register');

router.get('/me');

router.put('/promote');

module.exports = router;
