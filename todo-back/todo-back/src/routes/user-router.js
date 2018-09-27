'use strict'

const
  router = require('koa-router')(),
  { UserService } = require('../services')

router
  .post('/signup', async (ctx) => {
    try {
      ctx.body = await UserService.SignUp(ctx.request.body)
      ctx.status = 200
    } catch (err) {
      ctx.body = {
        message: err.message || err.stack
      }
      ctx.status = 400
    }
  })

  .post('/signin', async (ctx) => {
    try {
      ctx.body = await UserService.SignIn(ctx.request.body)
      ctx.status = 200
    } catch (err) {
      ctx.body = {
        message: err.message || err.stack
      }
      ctx.status = 400
    }
  })

module.exports = router
