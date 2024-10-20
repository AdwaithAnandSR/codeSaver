import mongoose from 'mongoose'

const schema = mongoose.Schema({
   title: String,
   code: String,
})

export default mongoose.model('Code',schema)