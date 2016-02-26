var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('weather.html', {root: 'public'});
});

router.get('/test1.html', function(req, res, next) {
  res.sendFile('test1.html', {root: 'routes'});
});

router.get('/test2.txt', function(req, res, next) {
  res.sendFile('test2.txt', {root: 'routes'});
});

router.get('/test3.gif', function(req, res, next) {
  res.sendFile('test3.gif', {root: 'routes'});
});

router.get('/test4.jpg', function(req, res, next) {
  res.sendFile('test4.jpg', {root: 'routes'});
});

router.get('/getCity', function(req, res, next) {
  fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
  if(err) throw err;
  console.log(req.query);
  var myRe = new RegExp("^" + req.query.q);
  console.log(myRe);
  var cities = data.toString().split("\n");
  var jsonresult = [];
  for(var i = 0; i < cities.length; i++) {
    var result = cities[i].search(myRe); 
    if(result != -1) {
      console.log(cities[i]);
      jsonresult.push({city:cities[i]});
    } 
  }   
  console.log(jsonresult);
  res.status(200).json(jsonresult);
  })		
});


module.exports = router;
