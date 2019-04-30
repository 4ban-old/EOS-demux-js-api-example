import mongoose from 'mongoose'

const { Schema } = mongoose

let mdl1 = null

try {
  const mdl1Schema = new Schema({
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
  mdl1Schema.index({ from:1, blockNumber: -1 })
  mdl1Schema.index({ to: 1, blockNumber: -1 })

  mdl1 = mongoose.model('mdl1collection', mdl1Schema)

  // mdl1.listIndexes().then(indexes => {
  //   console.log("indexes:", indexes);
  // }).catch(console.error);
} catch (e) {
  console.log(e)
  mdl1 = mongoose.model('mdl1collection')
}

export default mdl1
