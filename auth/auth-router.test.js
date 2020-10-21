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

        it('returns 200 status on success', function () {
            return request(server)
                .post('/api/auth/signin')
                .send({
                    username: 'TestUsername',
                    password: 'testPassword'
                })
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('returns object with message, id and token on successful login', function () {
            return request(server)
                .post('/api/auth/signin')
                .send({
                    username: 'TestUsername',
                    password: 'testPassword'
                })
                .then(res => {
                    expect(res.body).toEqual({
                        message: res.body.message,
                        id: res.body.id,
                        token: res.body.token
                    })
                })
        })

        it('returns 401 if incorrect credentials entered', function () {
            return request(server)
                .post('/api/auth/signin')
                .send({
                    username: 'TestUsername',
                    password: 'wrongPassword'
                })
                .then(res => {
                    expect(res.status).toBe(401)
                })
        })
    })
})