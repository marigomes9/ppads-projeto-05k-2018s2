'use strict'

const
  router = require('koa-router')(),
  { ListService } = require('../services')

router
  .post('/', async (ctx) => {
    try {
      ctx.body = await ListService.create(ctx.request.body)
      ctx.status = 200
    } catch (err) {
      ctx.body = {
        message: err.message || err.stack
      }
      ctx.status = 400
    }
  })

  .get('/:id', async (ctx) => {
    try {
      ctx.body = await ListService.findOne(ctx.params.id)
      ctx.status = 200
    } catch (err) {
      ctx.body = {
        message: err.message || err.stack
      }
      ctx.status = 400
    }
  })

  .get('/user/:id', async (ctx) => {
    try {
      ctx.body = await ListService.find(ctx.params.id)
      ctx.status = 200
    } catch (err) {
      ctx.body = {
        message: err.message || err.stack
      }
      ctx.status = 400
    }
  })

module.exports = router
