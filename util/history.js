import models from '../models';

function getEOSHistoryAccount1(accountName, skip, limit) {
  return new Promise((resolve, reject) => {
    var response = {}
    models.mdl1.find({
      $or: [
        { 'from': accountName },
        { 'to': accountName }
      ]},
      null,
      {
        skip: skip,
        limit: limit,
        sort: { blockNumber: -1 }
      }, function (err, transactions) {
      if (err) {
        var error = {
          "error": true,
          "message": err
        }
        reject(error)
      }
      response = {
        "error" : false,
        "data" : transactions
      };
      resolve(response)
    })
  })
}

function getEOSHistoryAccount2(accountName, skip, limit) {
  return new Promise((resolve, reject) => {
    var response = {}
    models.mdl2.find({
      $or: [
        { 'from': accountName },
        { 'to': accountName }
      ]},
      null,
      {
        skip: skip,
        limit: limit,
        sort: { blockNumber: -1 }
      }, function (err, transactions) {
      if (err) {
        var error = {
          "error": true,
          "message": err
        }
        reject(error)
      }
      response = {
        "error" : false,
        "data" : transactions
      };
      resolve(response)
    })
  })
}

module.exports = {
  getEOSHistoryAccount1: getEOSHistoryAccount1,
  getEOSHistoryAccount2: getEOSHistoryAccount2,
}