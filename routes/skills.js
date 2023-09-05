var express = require('express');
var router = express.Router();

// Require controller that handles CRUD
const skillCtrl = require('../controller/skills')

//all actual paths start with '/skills'

//GET /skills
router.get('/', skillCtrl.index)

//GET /skills/new
router.get('/new', skillCtrl.new)

//Get /skills/:id
router.get('/:id', skillCtrl.show)

//POST /todos/index ../views/skills/index
router.post('/', skillCtrl.create)


router.delete('/:id', skillCtrl.delete)

module.exports = router;
