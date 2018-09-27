const { TaskModel } = require('../models')

class ListRepository {
  async _create (list) {
    return TaskModel.create(list)
  }

  async _findListsTasks (id) {
    return TaskModel.find({
      'list': id
    })
      .lean()
  }
}

module.exports = new ListRepository()
