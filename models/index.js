import mongoose from 'mongoose';
require('dotenv').config()
import Eos from './eos.model'
import Ledger from './ledger.model'

const connectDb = () => {
  const options = {
    useNewUrlParser: true,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS
  }
  return mongoose.connect(process.env.MONGODB_URL, options);
}

const models = {
  Eos,
  Ledger
}

export {
  connectDb
}

export default models
