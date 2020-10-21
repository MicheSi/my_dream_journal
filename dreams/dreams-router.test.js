const request = require('supertest');
const server = require('../api/server');
const db = require('../data/db-config');

describe('dreams router', function () {
    it('tests are running', function () {
        expect(true).toBe(true);
    });

    it('returns status 400 if not signed in', function () {
        return request(server)
            .get('/api/dreams')
            .then(res => {
                expect(res.status).toBe(400)
            })
    })

    describe('GET /api/dreams', function () {
        beforeAll(() => {
            return request(server)
                .post('/api/auth/register')
                .send({
                    username: 'DreamsTest',
                    password: 'password'
                })
                .then(res => {
                    return request(server)
                        .post('/api/auth/signin')
                        .send({
                            username: 'DreamsTest',
                            password: 'password'
                        })
                        .then(res => {
                            token = res.body.token
                        })
                })
        })

        afterAll(() => {
            return db('users').truncate()
        })

        it('200 status on success', function () {
            return request(server)
                .get('/api/dreams')
                .set('authorization', token)
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it('returns an array of dream objects', function () {
            return request(server)
                .get('/api/dreams')
                .set('authorization', token)
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true)
                })
        })
    })
})