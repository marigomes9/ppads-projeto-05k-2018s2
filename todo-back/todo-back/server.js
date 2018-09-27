'use strict'

const
  bodyParser = require('koa-body'),
  CONSTANTS = require('./src/config/constants'),
  convert = require('koa-convert'),
  helmet = require('koa-helmet'),
  cors = require('koa2-cors'),
  db = require('./src/config/mongoConnect'),
  gzip = require('koa-gzip'),
  http = require('http'),
  server = require('./app')

server.use(cors(CONSTANTS.CORS))
server.use(convert(bodyParser(CONSTANTS.BODYPARSER)))
server.use(convert(gzip()))
server.use(helmet())

require('./src/routes')(server)

db
  .then(() => {
    return http.createServer(server.callback()).listen(CONSTANTS.PORT.HTTP)
  })
  .then(() => {
    console.log('Listening...')
  })

module.exports = server
