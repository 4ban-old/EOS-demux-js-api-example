var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Demux-api',
    apis: [
      '/                      - List of API',
      '/col1                   - Do nothing',
      '/col2                - Do nothing',
      '/col1/<AccountName>     - History for account 1',
      '/col2/<AccountName>   - History for account 2',
      '/col1/stats/<AccountName>     - Stats for account 1',
      '/col2/stats/<AccountName>   - Stats for account 2',
    ]
  });
});

module.exports = router;
