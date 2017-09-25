var express = require('express');
var router = express.Router();
module.exports = router;

var models = require('../models');
var Page = models.Page; 
var User = models.User; 


router.post('/', function(req, res, next) {
  console.log(req.body);
  var page = Page.build(req.body);

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
  .then(function(savedPage){
    res.redirect(savedPage.route)
  });
  // -> after save -> res.redirect('/');


});

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/add', function(req, res) { //do we need next?
  res.render('../views/addpage');
});

router.get('/:urlTitle', function (req, res, next) {
  Page.findOne({ 
    where: { 
      urlTitle: req.params.urlTitle 
    } 
  })
  .then(function(page){
    res.render('../views/wikipage', {page});
  })
  .catch(next);
});