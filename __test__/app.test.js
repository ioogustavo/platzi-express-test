const request = require('supertest');
const app = require('../app.js');

describe('Probar nuestro mini servidor de express', () => {
    test('Debe responder al método GET', done => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});