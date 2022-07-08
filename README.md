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

[x] app.js

We began by creating a simple app.js which contained the basic API endpoints (using app.get). This created the barebones structure of the server. 
The routes methods to access all API end points will be imported from another file later. The express static methods were also added so that the HTML could be displayed on heroku.

[x] server.js
Another file called server.js was created, which then contained the listen function to host the server. This took imported methods from our app.js server using module.exports and require.

[x] models.js
Then we needed to create the class from which messages could be created from automatically. We used a class that contained the properties 'message_id', 'message', 'comments', 'react', and 'gif. The static methods were added which could find each of these properties and isolate them from the message objects.

[x] data.js
The Message class template was modelled after an example message which is contained in data.js. This is an array which contains the different objects that were stated above.

[x] routes.js
The routes methods were set using .get, which combined with the message class functions (which were imported from models.js) we could display messages, comments, emojis and gifs.

The .post , .patch, and .delete methods were also used so that messages could be deleted, emojis updated and messages and comments could be posted.

The postman app was very useful for checking to see if these methods worked, without creating any javascript DOM code to access it.

[x] heroku deployment

This server could then be hosted on heroku by installing the heroku CLI, and adding the appropriate buildpacks. The config var was set to server, with a copy of the front-end files also placed within our server directory so that heroku could display our HTML.

- Front-end Javascript

[x] forum.js

Functions were created to fetch the API data for all of our message properties. For example the postMessage function would fetch our /messages API endpoint, and then use DOM manipulation Javascript to use that retrieved json data to display all messages neatly on the board.

Comments functionality was addressed in almost the same way, except another window would be used and tied to each message so that their own comments would be retrieved and displayed on their own.

Using click event listeners, these functions were tied to buttons like 'Hack the mainframe' to post a message, with a comments and delete button for performing those functions.

Emoji counters were added by adding event listeners to their pictures, and within those events including the patch method to update the counter whenever the image is clicked.

- Bugs
Unfortunately, we could not figure out how to only leave comments on one post, comments will also be posted to every other message present.










