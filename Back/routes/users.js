var express = require('express');
var router = express.Router();

router.get('/GetUser', function(req, res, next) {
  const db = [
    {
      "id": "1",
      "name": "Game of thrones"
    },
    {
      "id": "2",
      "name": "Clash of kings"
    }
  ];
  // res.body.
  req.json(db);
});

/* GET users listing. */
router.post('/CreatUser', function(req, res, next) {

  const db = [
    {
      "id": "1",
      "name": "Game of thrones"
    },
    {
      "id": "2",
      "name": "Clash of kings"
    }
  ];

  res.json(db);
});

module.exports = router;
