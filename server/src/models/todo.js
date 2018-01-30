import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  text: { type: String, required: true },
  done: { type: Boolean, required: true }
})

export default mongoose.model('Todo', todoSchema)
