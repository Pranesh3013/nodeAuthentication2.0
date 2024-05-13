const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController')

//Login 
router.get('/login', (req, res) => res.render('login'));

//Forgot Password
router.get('/forgot', (req, res) => res.render('forgot'));

//Reset Password
router.get('/reset/:id', (req, res) => {
    res.render('reset', { id: req.params.id })
});

//Register
router.get('/register', (req, res) => res.render('register'));

//Register POST
router.post('/register', authController.registerHandle);

//Email ACTIVATE
router.get('/activate/:token', authController.activateHandle);

//Forgot Password
router.post('/forgot', authController.forgotPassword);

//Reset Password
router.post('/reset/:id', authController.resetPassword);

//Reset Password
router.get('/forgot/:token', authController.gotoReset);

//Login POST
router.post('/login', authController.loginHandle);

//Logout
router.get('/logout', authController.logoutHandle);

module.exports = router;