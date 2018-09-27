const { UserModel } = require('../models')

class UserRepository {
  async _create (user) {
    return UserModel.create(user)
  }

  async _findOne (user) {
    return UserModel.findOne(user).lean()
  }
}

module.exports = new UserRepository()
