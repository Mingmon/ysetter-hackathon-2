var express = require('express');
var router = express.Router();

var mongojs = require('./db');
var db = mongojs.connect;

router.use(express.json())
router.get('/getemploye', function(req, res, next) {
  const getdb = db.employee.find({name: req.query.name},function(err,data) {
    console.log("pass");
    res.json(data);
  });
});

router.get('/getallemploye', function(req, res, next) {
  const getdb = db.employee.find({}).toArray(function(err, data) {
    if (err) throw err;
    console.log(data);
    res.json(data);
    db.close();
  });

});
/* GET users listing. */
router.post('/employe', function(req, res, next) {
  console.log(req.body); // your JSON
  res.send(req.body);
  db.employee.insert(req.body);
});

module.exports = router;
