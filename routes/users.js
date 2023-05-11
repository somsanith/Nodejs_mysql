var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

//get user listing
router.get('/', userController.index);

module.exports = router;
