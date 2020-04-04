let request = require('supertest')
import app from '../../src'
let expect = require('chai').expect

describe('Home Track Root', function() {
    it('should show error message when GET root link', function(done) {
        request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(400, done)
    })
})
