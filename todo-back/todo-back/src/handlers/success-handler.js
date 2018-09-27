'use strict'

module.exports = (paging, data, status, req, res) => {
  res.status = status
  res.body = {
    paging: paging,
    data: data
  }
  if (!paging['page']) {
    delete res.body['paging']
  }
}
