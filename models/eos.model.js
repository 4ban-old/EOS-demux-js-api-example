import mongoose from 'mongoose'

const { Schema } = mongoose

let Eos = null

try {
  // Schema of desired fields to save for eosio.token contract
  const EosSchema = new Schema({
    from: String,
    to: String,
    quantity: String,
    currency: String,
    memo: String,
    trx_id: { type: String, unique: true },
    blockNumber: Number,
    blockHash: String,
    handlerVersionName: String
  })

  Eos = mongoose.model('Eos', EosSchema)
} catch (e) {
  console.log(e)
  Eos = mongoose.model('Eos')
}

export default Eos
