import app from '../src/server.js';
import request from 'supertest';

describe('Probar endpoints de /', () => {

    test('test de endpoint / hola mundo', async () => {
        return await request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /text\/html/)
            .then((response) => {
                expect(response.text).toContain('Hola mundo al usuario');
            });
    });

    test('test de endpoint /api-key', async () => {
        return await request(app)
            .get('/api-key')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .then((response) => {
                expect(response.body.data).toContain('la apikey de mi aplicacion es:');
            });
    });
});