const { TaskRepository } = require('../repositories')

class TaskService {
  async create (body) {
    if (!body.list || !body.description) {
      throw new Error('Faltam informações!')
    }

    return TaskRepository._create(body)
  }

  async find (id) {
    return TaskRepository._findListsTasks(id)
  }
}

module.exports = new TaskService()
