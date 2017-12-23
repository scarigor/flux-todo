import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  _id: Number,
  text: String,
  done: Boolean
})

export default mongoose.model('Todo', todoSchema)
