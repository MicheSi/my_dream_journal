const request = require('supertest');
const server = require('../api/server');
const db = require('../data/db-config');

describe('auth router', function () {
    it('tests are running', function () {
        expect(true).toBe(true)
    })

    describe('POST /api/auth/register', function () {
        afterAll(() => {
            return db('users').cleanUp()
        })

        beforeEach(() => {
            return db('users').truncate()
        })
        
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
                .post('/api/auth/signin')
                .send({
                    username: 'TestUsername',
                    password: 'testPassword'
                })
                .then(res => {
                    expect(res.type).toBe('application/json')
                })
        })

        it('returns a welcome message upon successful login', function () {
            return request(server)
                .post('/api/auth/signin')
                .send({
                    username: 'TestUsername',
                    password: 'testPassword'
                })
                .then(res => {
                    expect(res.body.message).toBe('Welcome TestUsername!')
                })
        })
    })
})