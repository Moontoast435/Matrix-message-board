# LAP-1-Project-RP

The project aim was to design a message board, which will allow users to post anonymously. Users will be able to post emojis, comments and gifs.

The theme of the message board was The Matrix. From the front page, users can decide to pick the 'blue pill' which takes them to regular twitter, and the 'red pill' 
to take them to our message board. The website is styled like the matrix , with a few easter eggs put in as well. See you if you can find them.

## Installation & Usage 

To simply view our app, visit https://evening-retreat-34987.herokuapp.com/

App is deployed completely on heroku, with front-end and back-end.

To install the app locally, clone this repo.

On the terminal, run npm i to install the packages required.

On VSCODE or your preferred code editor, open index.html (located inside server folder) with a browser.

## Technologies

- HTML
- CSS
- Javascript
- node.js
- express.js
- nodemon
- jest
- jsdom
- jest-mocking
- supertest
- postman
- heroku
- photoshop 
- canvas
- Giphy API
- cors 
- bodyparser

## Process

- API 

We began by creating a simple app.js which contained the basic API endpoints (using app.get). This created the barebones structure of the server. 
Another file called server.js was created, which then contained the listen function to host the server. This took imported methods from our app.js server using module.exports and require.

Then we needed to create the class from which messages could be created from automatically. We used a class that contained the properties 'message_id', 'message', 'comments', 'react', and 'gif. The static methods were added which could find each of these properties and isolate them from the message objects.

![image](https://user-images.githubusercontent.com/95479796/177959361-60b5fb99-41ac-48cd-9a7d-ade54b84d662.png)





