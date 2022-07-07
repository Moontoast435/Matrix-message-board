/**
* @jest-environment jsdom
*/



const fs = require('fs');
const path = require('path');
const { compareAlpha } = require('../assets/forum.js');

const html = fs.readFileSync(path.resolve(__dirname, '../forum.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

describe('allMessages', () => {

    const messages = [
        {
          message_id: 1,
          message: "example message",
          comments: [
            { comment: "example comment" },
            { comment: "example comment" },
            { comment: "example comment" },
          ],
          react: [{ like: 1 }, { dislike: 0 }, { heart: 0 }],
        }
      ];

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../assets/forum.js')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () => {
        describe('getAllMessages', () => {
            test('it makes a delete request to /messages', () => {
                app.deletePost();
                expect(app.deletePost).toBeTruthy();

            })

            

            test('it makes a get request to /messages', () => {
                app.getMessages();
                expect(app.getMessages).toBeTruthy();
                expect(fetch).toHaveBeenCalledWith('https://evening-retreat-34987.herokuapp.com/messages')
                expect(fetch).toHaveBeenCalled();
                expect(fetch.mock.calls[0][0]).toMatch(/messages$/)
            })

            //for create
            
            it("exists",  () => {
                let evt = {preventDefault: jest.fn(), target: [{value: "test"}]}
                message = app.postMessage(evt);
                expect(message).toBeDefined()
            })

            test('it makes a post request to /messages', () => {
                let evt = {preventDefault: jest.fn(), target: [{message: "test"}]}
                app.postMessage(evt);
                expect(app.postMessage).toBeTruthy();

            })


            //for getMessages
            beforeEach(() => {
                const section = document.createElement(".producti")
                app.getMessages(section)
                document.body.append(section)
            })
    
            it("has a set up, date and punchline button on the page", () => {
                expect(document.querySelector('section').textContent).toContain("example message");
                expect(document.querySelector('section button')).toBeTruthy();
            })
        });
        
    })

    

})
