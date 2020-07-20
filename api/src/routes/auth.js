const router = require('express').Router();
const { User } = require("../models");
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { propfind } = require('./auth');
const { response } = require('express');

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ where: { username: username } })
            .then(function (user, err) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.checkPassword(password)) { return done(null, false); }
                console.log(user)
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

router.use(session({ secret: "mi secreto" }));
router.use(passport.initialize());
router.use(passport.session());

// S63 - RUTA PARA LOGIN //

router.post('/login',passport.authenticate('local'
//  { successRedirect: '/',failureRedirect: '/login' }
 ),
    function (req, res) {
       
        res.status(200).json({login: true, userId: req.user.userId, username: req.user.username, type: req.user.type});
    });

router.post('/changepassword');

router.get('/logout');

router.post('/register');

router.get('/me');

router.put('/promote');

module.exports = router;
