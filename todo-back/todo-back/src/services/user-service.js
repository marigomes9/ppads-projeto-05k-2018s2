const { UserRepository } = require('../repositories')

class UserService {
  async SignUp (body) {
    if (!body.email || !body.password) {
      throw new Error('Precisamos de e-mail e senha!')
    }

    const user = {
      'email': body.email.toLowerCase(),
      'password': body.password
    }

    return UserRepository._create(user)
  }

  async SignIn (body) {
    if (!body.email || !body.password) {
      throw new Error('Precisamos de e-mail e senha!')
    }

    const user = await UserRepository._findOne({
      'email': body.email.toLowerCase(),
      'password': body.password
    })

    if (!user) throw new Error ('Usuário não encontrado')

    return user
  }
}

module.exports = new UserService()
