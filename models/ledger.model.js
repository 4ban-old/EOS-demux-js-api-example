import mongoose from 'mongoose'

const { Schema } = mongoose

let Ledger = null

try {
  // Schema of desired fields to save for custom contract and it's actions
  const LedgerSchema = new Schema({
    s: String,
    fromaccount: String,
    toaccount: String,
    amount: String,
    tokey: String,
    comment: String,
    nonce: String,
    trx_id: { type: String, unique: true },
    blockNumber: Number,
    blockHash: String,
    handlerVersionName: String
  })

  Ledger = mongoose.model('Ledger', LedgerSchema)
} catch (e) {
  console.log(e)
  Ledger = mongoose.model('Ledger')
}

export default Ledger
