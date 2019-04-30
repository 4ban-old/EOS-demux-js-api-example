import mongoose from 'mongoose';
require('dotenv').config()
import mdl1 from './schema_1.model'
import mdl2 from './schema_2.model'

const connectDb = () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS
  }
  return mongoose.connect(process.env.MONGODB_URL, options);
}

const models = {
  mdl1,
  mdl2
}

export {
  connectDb
}

export default models
