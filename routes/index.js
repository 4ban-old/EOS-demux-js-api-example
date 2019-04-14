var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Demux-api',
    apis: [
      '/                      - List of API',
      '/eos                   - Does nothing',
      '/ledger                - Does nothing',
      '/eos/<AccountName>     - History for EOS account',
      '/ledger/<wallet>   - History for Ledger wallet',
    ]
  });
});

module.exports = router;
