import models from '../models';

// Search in eos collection transactions by filds "from" and "to"
function getEOSHistory (accountName) {
  return new Promise((resolve, reject) => {
    models.Eos.find({
      $or: [
        { 'from': accountName },
        {'to': accountName}
      ]}, function (err, transactions) {
      if (err) reject(err)
      resolve(transactions)
    })
  })
}
// Search in ledger collection transactions by field "tokey"
function getLedgerHistory(walletName) {
  return new Promise((resolve, reject) => {
    models.Ledger.find({
      'tokey': walletName
    }, function (err, transactions) {
      if (err) reject(err)
      resolve(transactions)
    })
  })
}

module.exports = {
  getEOSHistory: getEOSHistory,
  getLedgerHistory: getLedgerHistory,
}