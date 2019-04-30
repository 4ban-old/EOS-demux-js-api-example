var express = require('express')
var router = express.Router()
import services from '../util'

router.get('/', function (req, res, next) {
  return res.render('index', {
    title: 'Account 1 API',
    apis: [
      '/col1/<accountName>      - History for account 1. Default skip=0, limit=10',
      '/col1/<accountName>?skip=0&limit=10      - History for account 1. First page',
      '/col1/<accountName>?skip=20&limit=10      - History for account 1. Third page',
      '/col1/stats/<accountName>      - Stats for account 1',
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
  services.History.getEOSHistoryAccount1(req.params.accountName, skip, limit).then(function (result) {
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
  services.Stats.getEOSStatsAccount1(req.params.accountName).then(function (result) {
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
