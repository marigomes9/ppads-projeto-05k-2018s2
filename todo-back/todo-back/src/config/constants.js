module.exports = {
  CORS: {
    allowOrigin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  },
  BODYPARSER: {
    formidable: {
      uploadDir: './uploads',
      maxFieldsSize: 1024 * 1024 * 1024
    },
    multipart: true
  },
  MONGO: {
    CONFIG: {
      port: process.env.MONGO_PORT || 27017,
      url: process.env.MONGO_HOST || 'mongodb://localhost:27017/to-do'
    },
    OPTIONS: {
      poolSize: 10,
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  PORT: {
    HTTP: process.env.PORT || 3000
  }
}
