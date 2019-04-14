var express = require('express');
var router = express.Router();
import utils from '../util'

router.get('/', function (req, res, next) {
  return res.render('index', {
    title: 'EOS account API',
    apis: [
      '/eos/<accountName>      - History for EOS account',
    ]
  });
})

router.get('/:accountName', (req, res) => {
  utils.getEOSHistory(req.params.accountName).then(function (result) {
    return res.send(result)
  }).catch(function (err) {
    console.log(err)
  })
})

module.exports = router;
