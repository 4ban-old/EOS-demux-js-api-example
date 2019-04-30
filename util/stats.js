import models from '../models';

function getEOSStatsAccount1(accountName) {
  return new Promise((resolve, reject) => {
    var response = {}
    models.mdl1.countDocuments({
      $or: [
        { 'from': accountName },
        { 'to': accountName }
      ]}, function (err, totalCount) {
      if (err) {
        var error = {
          "error": true,
          "message": err
        }
        reject(error)
      }
      response = {
        "error" : false,
        "account": accountName,
        "docs": totalCount
      };
      resolve(response)
    })
  })
}

function getEOSStatsAccount2(accountName) {
  return new Promise((resolve, reject) => {
    var response = {}
    models.mdl2.countDocuments({
      $or: [{
          'from': accountName
        },
        {
          'to': accountName
        }
      ]
    }, function (err, totalCount) {
      if (err) {
        var error = {
          "error": true,
          "message": err
        }
        reject(error)
      }
      response = {
        "error": false,
        "account": accountName,
        "docs": totalCount
      };
      resolve(response)
    })
  })
}

module.exports = {
  getEOSStatsAccount1: getEOSStatsAccount1,
  getEOSStatsAccount2: getEOSStatsAccount2,
}