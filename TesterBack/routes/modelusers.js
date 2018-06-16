var express = require('express');
var router = express.Router();

var mongojs = require('./db');
var db = mongojs.connect;

router.use(express.json())
router.get('/getuser', function(req, res, next) {
  var getdb = db.employee.insert([
    {
      "famid": req.query.famid,
      "name": req.query.name,
      "surname": req.query.surname
    }]);
  res.json(getdb);
});

/* GET users listing. */
router.post('/postuser', function(req, res, next) {
  console.log(req.body); // your JSON
  res.send(req.body);
});

module.exports = router;
