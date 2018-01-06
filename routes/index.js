var express = require('express');
var router = express.Router();

//I would normally never do this by putting a globa in the routing. FOR DEMO purposes only
var widgets = [{
  id: 1,
  name: 'test',
  price: 100.00,
  desc: 'Test'
}]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//test router
router.get('/test', function (req, res, next) {
  res.render('index', { title: 'Tester!' }, function (err, data) {
    if (!err) { //Very basic error checking!
      console.log(err);
      res.write(data);
      res.end();
    }
  });
});

//regular express route
router.get('/jeremy/:id', function (req, res, next) {
  res.write('you got Jeremy with an id: ' + req.params.id);
  res.end();
})

router.post('/widgets/add', function (req, res, next) {
  var wlength = widgets.length;
  //Add to our in-memory array
  widgets[wlength] = {
    id: wlength,
    name: req.body.widgetname,
    price: parseFloat(req.body.widgetprice),
    desc: req.body.widgetdesc
  };
  console.log(widgets[wlength]);
  res.send('Widget created! : ' + widgets[wlength]);
});

module.exports = router;
