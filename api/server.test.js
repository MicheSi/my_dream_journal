const request = require('supertest');
const server = require('../api/server');

describe('server', function () {
    it('runs tests', function () {
        expect(true).toBe(true)
    })

    describe('GET /', function () {
        it('response 200 on success', function () {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return Server is running!', function () {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.text).toEqual('Server is running!')
            })
        })
    })
})