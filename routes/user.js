var express = require('express');
var router = express.Router();
var todoCtrl = require('../controllers/todo');

router.get('/', todoCtrl.index);
router.post('/', todoCtrl.create)

module.exports = router;