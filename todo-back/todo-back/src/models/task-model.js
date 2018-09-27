const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

const TaskSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  list: {
    type: Schema.Types.ObjectId,
    ref: 'List',
    required: true
  },
  time: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = {
  TaskSchema: TaskSchema,
  Task: mongoose.model('Task', TaskSchema)
}
