const { ListModel } = require('../models')

class ListRepository {
  async _create (list) {
    return ListModel.create(list)
  }

  async _findUserLists (id) {
    return ListModel.find({
      'owner': id
    })
      .lean()
  }

  async _findOne (id) {
    return ListModel.findById(id)
      .lean()
  }
}

module.exports = new ListRepository()
