'use strict'

const
  router = require('koa-router')(),
  userRouter = require('./user-router'),
  listRouter = require('./list-router'),
  taskRouter = require('./task.router')

module.exports = (server) => {
  router.use('/api/user', userRouter.routes())
  router.use('/api/list', listRouter.routes())
  router.use('/api/task', taskRouter.routes())
  server.use(router.routes()).use(router.allowedMethods())
}
