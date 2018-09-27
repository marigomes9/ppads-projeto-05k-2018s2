module.exports = (message, status, context) => {
  context.response.status = status
  throw new Error(message)
}
