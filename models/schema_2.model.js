import mongoose from 'mongoose'

const { Schema } = mongoose

let mdl2 = null

try {
  const mdl2Schema = new Schema({
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
  mdl2Schema.index({ from:1, blockNumber: -1 })
  mdl2Schema.index({ to: 1, blockNumber: -1 })

  mdl2 = mongoose.model('mdl2collection', mdl2Schema)

  // mdl2.listIndexes().then(indexes => {
  //   console.log("indexes:", indexes);
  // }).catch(console.error);
} catch (e) {
  console.log(e)
  mdl2 = mongoose.model('mdl2collection')
}

export default mdl2
