var nosniff = require('..')

var assert = require('assert')
var connect = require('connect')
var request = require('supertest')

describe('nosniff', function () {
  it('sets header properly', function () {
    var app = connect()
    app.use(nosniff())
    app.use(function (req, res) {
      res.end('Hello world!')
    })

    return request(app).get('/')
      .expect('X-Content-Type-Options', 'nosniff')
  })

  it('names its function and middleware', function () {
    assert.equal(nosniff.name, 'nosniff')
    assert.equal(nosniff().name, 'nosniff')
  })
})
