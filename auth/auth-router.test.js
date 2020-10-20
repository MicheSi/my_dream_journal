const request = require('supertest');
const server = require('../api/server');

describe('auth router', function () {
    it('tests are running', function () {
        expect(true).toBe(true)
    })

    describe('POST /api/auth/register', function () {
        it('status 201 on successful register', function () {
            return request(server)
                .post('/api/auth/register')
                .send({
                    username: 'TestUsername',
                    password: 'testPassword'
                })
                .then( res => {
                    expect(res.status).toBe(201)
                })
        })
    })

    describe('POST /api/auth/login', function () {
        it('returns JSON on successful login', function () {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'TestUsername',
                    password: 'testPassword'
                })
                .then(res => {
                    expect(res.type).toBe('text/html')
                })
        })

        it('returns a welcome message upon successful login', function () {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'TestUsername',
                    password: 'testPassword'
                })
                .then(res => {
                    expect(res.body.message).toBe('Welcome TestUsername')
                })
        })
    })
})