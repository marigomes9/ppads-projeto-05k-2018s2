'use strict'

const
  router = require('koa-router')(),
  { TaskService } = require('../services')

router
  .post('/', async (ctx) => {
    try {
      ctx.body = await TaskService.create(ctx.request.body)
      ctx.status = 200
    } catch (err) {
      ctx.body = {
        message: err.message || err.stack
      }
      ctx.status = 400
    }
  })

  .get('/list/:id', async (ctx) => {
    try {
      ctx.body = await TaskService.find(ctx.params.id)
      ctx.status = 200
    } catch (err) {
      ctx.body = {
        message: err.message || err.stack
      }
      ctx.status = 400
    }
  })

module.exports = router
