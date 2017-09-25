var express = require('express');
var router = express.Router();

module.exports = router;
var models = require('../models');
var Page = models.Page;

const wikiRouter = require('./wiki');
const userRouter = require('./user');
router.use('/wiki', wikiRouter);//plugging them in
router.use('/user', userRouter);//plugging them in

router.get('/', function (req, res, next) {
   Page.findAll({ })
  .then(function(pages){
    res.render('../views/index', {pages});
  })
  .catch(next);
});