var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//test router
router.get('/test', function(req,res,next){
  res.render('index', {title: 'Tester!'},function(err, data){
    if (!err){ //Very basic error checking!
      console.log(err);
      res.write(data);
      res.end();
    }
  });
});

//regular express route
router.get('/jeremy/:id', function(req,res,next){
  res.write('you got Jeremy with an id: ' + req.params.id);
  res.end();
})

module.exports = router;
