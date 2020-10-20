const request = require('supertest');
const server = require('../api/server');

// describe('dreams router', function () {
//     it('tests are running', function () {
//         expectCt(true).toBe(true);
//     });

//     describe('GET /api/dreams', function () {
//         it('200 status on success', function () {
//             return request(server)
//             .get('/api/dreams')
//             .then(res => {
//                 expect(res.status).toBe(200);
//             })
//         })
//     })
// })