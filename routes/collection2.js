var express = require('express')
var router = express.Router()
import services from '../util'

router.get('/', function (req, res, next) {
  return res.render('index', {
    title: 'Account 2 API',
    apis: [
      '/col2/<accountName>      - History for account 2. Default skip=0, limit=10',
      '/col2/<accountName>?skip=0&limit=10      - History for account 2. First page',
      '/col2/<accountName>?skip=20&limit=10      - History for account 2. Third page',
      '/col2/stats/<accountName>      - Stats for account 2',
    ]
  });
})

router.get('/:accountName', (req, res) => {
  var skip = parseInt(req.query.skip) || parseInt(process.env.SKIP)
  var limit = parseInt(req.query.limit) || parseInt(process.env.LIMIT)
  if (skip < 0 || limit < 0) {
    var response = {
      "error": true,
      "message": "Invalid skip or limit number, should start with 0 or 1 respectively"
    };
    return res.send(response)
  }
  // skip = limit * (page - 1)
  services.History.getEOSHistoryAccount2(req.params.accountName, skip, limit).then(function (result) {
    return res.send(result)
  }).catch(function (err) {
    var error = {
      "error": true,
      "message": err
    }
    res.send(error)
  })
})

router.get('/stats/:accountName', (req, res) => {
  services.Stats.getEOSStatsAccount2(req.params.accountName).then(function (result) {
    return res.send(result)
  }).catch(function (err) {
    var error = {
      "error": true,
      "message": err
    }
    res.send(error)
  })
})

module.exports = router
