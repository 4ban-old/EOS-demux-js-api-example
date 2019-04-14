var express = require('express');
var router = express.Router();
import utils from '../util'

router.get('/', function (req, res, next) {
  return res.render('index', {
    title: 'Ledger wallet API',
    apis: [
      '/ledger/<wallet>      - History for Ledger wallet',
    ]
  });
})

router.get('/:walletName', (req, res) => {
  utils.getLedgerHistory(req.params.walletName).then(function (result) {
    return res.send(result)
  }).catch(function (err) {
    console.log(err)
  })
})

module.exports = router;
