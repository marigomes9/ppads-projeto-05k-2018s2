const { ListRepository } = require('../repositories')

class ListService {
  async create (body) {
    if (!body.owner || !body.title) {
      throw new Error('Precisamos do nome da lista!')
    }

    return ListRepository._create(body)
  }

  async find (id) {
    return ListRepository._findUserLists(id)
  }

  async findOne (id) {
    return ListRepository._findOne(id)
  }
}

module.exports = new ListService()
