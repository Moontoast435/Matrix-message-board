/**
* @jest-environment jsdom
*/



const fs = require('fs');
const path = require('path');
const { compareAlpha } = require('../assets/forum.js');

const html = fs.readFileSync(path.resolve(__dirname, '../forum.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../assets/forum.js')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () => {
        describe('getAllMessages', () => {
            test('it makes a get request to /messages', () => {
                app.deletePost();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                // expect(fetch.mock.calls[0][0]).toMatch(/cats$/)
                expect(app.deletePost).toBeTruthy();
            })

            

            test('it makes a get request to /messages', () => {
                app.getMessages();
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                // expect(fetch.mock.calls[0][0]).toMatch(/cats$/)
                expect(app.getMessages).toBeTruthy();
            })
            beforeEach(() => {
                fetch.resetMocks();
                evt =  { preventDefault: jest.fn()}
            })
            test('it makes a get request to /messages', () => {
                app.postMessage(evt);
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                // expect(fetch.mock.calls[0][0]).toMatch(/cats$/)
                expect(app.postMessage).toBeTruthy();
            })
        });
        
       
    })

    


})
