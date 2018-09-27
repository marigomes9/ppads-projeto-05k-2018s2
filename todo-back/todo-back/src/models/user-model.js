const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = {
  UserSchema: UserSchema,
  User: mongoose.model('User', UserSchema)
}
