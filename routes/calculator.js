var express = require('express');
var router = express.Router();
const sendDataToPython = require('../GlobalFunctions/SendDataToPython')

router.get('/', function(req, res, next) {
  res.send('Calculation on python scripts...');
});

router.post('/', function(req, res, next) {
  let {latex} = req.body; 
  console.log(latex)
  sendDataToPython(latex)
    .then(result=>res.status(200).send(result))
    .catch(err=>res.status(400).send(err))
});

module.exports = router;