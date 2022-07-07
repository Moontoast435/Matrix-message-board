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
                // expect(message).toBeDefined()
            })

            test('it makes a post request to /messages', () => {
                let evt = {preventDefault: jest.fn(), target: [{message: "test"}]}
                app.postMessage(evt);
                expect(app.postMessage).toBeTruthy();

            })

            describe("getMessages", () => {
                it("creates a paragraph element", () => {
                    let postContainer = document.getElementById("post-container");
                    // app.getMessages()

                    app.appendResult({
                        message_id: 1,
                        message: "example message",
                        comments: [
                          { comment: "example comment" }
                        ],
                        react: [{ like: 1 }, { dislike: 0 }, { heart: 0 }],
                      })
                    // let msgId = result.message_id; // this will just assign the post an ID, could be useful for deleting or changing specific posts
                    // const message1="example message"
                    // let message = result.message1; // transferring the message from the post to a variable
                    // // let reacts = result.react; // reacts and comments arent being used yet but stored those properties into variables for later
                    // // let comments = result.comments;
                    // // the messages array has .forEach applied to it, which then will create a series of divs with classes to be appended to each other to make the 'post'
                    // let post = document.createElement("div"); // post container
                    // post.classList = "post";
                    // let postAvatar = document.createElement("div"); //div for the avatar
                    // postAvatar.classList = "post__avatar";
                    // let profileImg = document.createElement("img"); // avatar image
                    // profileImg.src = "assets/imgs/hackerprofile.png"; // avatar image
                    // profileImg.alt = "Profile Icon";
                    // postAvatar.appendChild(profileImg);

                    // // making the post body and post header divs, for which the message text will be eventually added.

                    // let postBody = document.createElement("div");
                    // postBody.classList = "post__body";
                    // post.appendChild(postAvatar);
                    // post.appendChild(postBody);
                    // let postHeader = document.createElement("div");
                    // postHeader.classList = "post__header";
                    // postBody.appendChild(postHeader);
                    // let postHeaderText = document.createElement("div");
                    // postHeaderText.classList = "post__headerText";

                    // // making the header, and spans which contain the anonymous poster name with the check symbol and @anonymous tag

                    // let h3 = document.createElement("h3");
                    // let span1 = document.createElement("span");
                    // span1.classList = "post__headerName";
                    // span1.textContent = "Anonymous";
                    // let span2 = document.createElement("span");
                    // span2.classList = "material-icons post__badge";
                    // span2.textContent = "check_circle";
                    // let span3 = document.createElement("span");
                    // span3.classList = "post__headerSpecial";
                    // span3.textContent = "@anonymous";
                    // h3.appendChild(span1);
                    // h3.appendChild(span2);
                    // h3.appendChild(span3);
                    // postHeaderText.appendChild(h3);

                    // // creating the last divs which contain the actual message
                    // let postHeaderDescription = document.createElement("div");
                    // postHeaderDescription.classList = "post__headerDescription";
                    // let postResults = document.createElement("p");
                    // postResults.classList = "latestPostsOutput";
                    // postHeaderDescription.appendChild(postResults);
                    // postHeader.appendChild(postHeaderText);
                    // postHeader.appendChild(postHeaderDescription);
                    // postContainer.appendChild(post);

                    // message.classList = msgId; // assigning each message its ID
                    // postResults.textContent = message; //appending the message to the final div inside the post to display

                    // let deleteBtn = document.createElement("button");
                    // deleteBtn.classList = "delete_button";
                    // deleteBtn.textContent = "DELETE";
        
                    
                    // expect(pdiv.children.length).toEqual(1);
                    expect(postContainer.textContent).toContain("example message")
                })
            })

            //for getMessages
            // beforeEach(() => {
            //     const section = document.createElement(".producti")
            //     app.getMessages(section)
            //     document.body.append(section)
            // })
    
            // it("has a set up, date and punchline button on the page", () => {
            //     expect(document.querySelector('section').textContent).toContain("example message");
            //     expect(document.querySelector('section button')).toBeTruthy();
            // })
        });
        
    })

    

})
