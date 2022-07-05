/**
 * @jest-environment jsdom
*/

const request = require('supertest');
const server = require('../app');

let testData = {
    message: "Is twitter better than facebok?",
    comments: [
        { comment: "yes it is" }
      ],
      react: [{ like: 1 }, { dislike: 0 }, { heart: 0 }]
    
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

    it('retrieves a message by id', (done)=>{
        request(api).get('/messages/3').expect(200).expect({message_id: 3, message: "Is twitter better than facebok?",comments: [
            { comment: 'yes it is' }
          ],
          react: [ { like: 1 }, { dislike: 0 }, { heart: 0 } ]}, done);
    })

    xit('responds to an unknown message id with a 404', (done) => {
        request(api).get('/messages/100').expect(404).expect({}, done);
    });

    it('responds to delete /messages/:id with status 204', async () => {
        await request(api).delete('/messages/2').expect(204);

        const updatedMessages = await request(api).get('/messages');

        expect(updatedMessages.body.length).toBe(2);
    });

    // it('responds to post /:id/comments with status 201', (done) => {
    //     request(api)
    //         .post('/messages/3/comments')
    //         .send(testData)
    //         .set('Accept', /application\/json/)
    //         .expect(200)
    //         .expect({ message_id: 2, ...testData }, done);
    // });

    it('GET /messages/:id/comments', async() => {
        const res = await request(api)
        .post('/messages/3/comments')
        .send(testData)
        expect(res.statusCode).toEqual(200)
    });

    it('GET /messages/:id/reacts', async() => {
        const res = await request(api)
        .post('/messages/3/reacts')
        .send(testData)
        expect(res.statusCode).toEqual(200)
    });

    it('DELETE /messages/:id', async() => {
        const res = await request(api)
        .delete('/messages/3')
        .send(testData)
        expect(res.statusCode).toEqual(204)
    });
})
