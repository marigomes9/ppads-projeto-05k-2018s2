const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

const ListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = {
  ListSchema: ListSchema,
  List: mongoose.model('List', ListSchema)
}
