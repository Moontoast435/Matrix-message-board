/**
 * @jest-environment jsdom
*/

const request = require('supertest');
const server = require('../app');

let testData = {
    message: "Is twitter better than facebok?",
    
}

describe('API server', () => {
    let api;

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Server online at http://localhost:5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /messages with status 200', (done) => {
        request(api).get('/messages').expect(200, done);
    });

    it('responds to post /messages with status 201', (done) => {
        request(api)
            .post('/messages')
            .send(testData)
            .set('Accept', /application\/json/)
            .expect(201)
            .expect({ message_id: 3, ...testData }, done);
    });
})
