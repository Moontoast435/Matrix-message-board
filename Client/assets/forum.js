const e = require("cors");

var API_URL = "https://evening-retreat-34987.herokuapp.com/messages";

let postContainer = document.getElementById("post-container");

function postMessage(e) {
  e.preventDefault(); // prevents page reload before the function can be carried out
  const commentBoxData = document.getElementById("feedInput").value; // targets the input box and takes its value to be stored in commentBoxData
  fetch('https://evening-retreat-34987.herokuapp.com/messages', {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // submits the data in urlencoded form
    },
    body: new URLSearchParams({
      message: commentBoxData, // takes the input value and passes it to the message parameter to be posted to the API
    }),
  })
    .then(res => {
      window.location.reload()
    })
    .catch(console.warn)
}


async function getMessages(){
  
  fetch('https://evening-retreat-34987.herokuapp.com/messages')

  .then((response) =>  {
      if(response.ok) {
          return response.json();
      }
      else{
          const h1 = document.createElement("h1");
          h1.textContent = 'Cannot find the search'
          }
      })
      .then(appendResults).catch((error) => {
          console.log(error)
  })
            
}

function appendResults(data) {
  data.forEach(appendResult);
}

function appendResult(result){
    var API_URL = "https://evening-retreat-34987.herokuapp.com/messages";

    let postContainer = document.getElementById("post-container");
    let msgId = result.message_id; // this will just assign the post an ID, could be useful for deleting or changing specific posts
    let message = result.message; // transferring the message from the post to a variable
    let reacts = result.react; // reacts and comments arent being used yet but stored those properties into variables for later
    let comments = result.comments;
    // the messages array has .forEach applied to it, which then will create a series of divs with classes to be appended to each other to make the 'post'

    let post = document.createElement("div"); // post container
    post.classList = "post";
    let postAvatar = document.createElement("div"); //div for the avatar
    postAvatar.classList = "post__avatar";
    let profileImg = document.createElement("img"); // avatar image
    profileImg.src = "assets/imgs/hackerprofile.png"; // avatar image
    profileImg.alt = "Profile Icon";
    postAvatar.appendChild(profileImg);

    // making the post body and post header divs, for which the message text will be eventually added.

    let postBody = document.createElement("div");
    postBody.classList = "post__body";
    post.appendChild(postAvatar);
    post.appendChild(postBody);
    let postHeader = document.createElement("div");
    postHeader.classList = "post__header";
    postBody.appendChild(postHeader);
    let postHeaderText = document.createElement("div");
    postHeaderText.classList = "post__headerText";

    // making the header, and spans which contain the anonymous poster name with the check symbol and @anonymous tag

    let h3 = document.createElement("h3");
    let span1 = document.createElement("span");
    span1.classList = "post__headerName";
    span1.textContent = "Anonymous";
    let span2 = document.createElement("span");
    span2.classList = "material-icons post__badge";
    span2.textContent = "check_circle";
    let span3 = document.createElement("span");
    span3.classList = "post__headerSpecial";
    span3.textContent = "@anonymous";
    h3.appendChild(span1);
    h3.appendChild(span2);
    h3.appendChild(span3);
    postHeaderText.appendChild(h3);

    // creating the last divs which contain the actual message

    let postHeaderDescription = document.createElement("div");
    postHeaderDescription.classList = "post__headerDescription";
    let postResults = document.createElement("p");
    postResults.classList = "latestPostsOutput";
    postHeaderDescription.appendChild(postResults);
    postHeader.appendChild(postHeaderText);
    postHeader.appendChild(postHeaderDescription);
    postContainer.appendChild(post);

    message.classList = msgId; // assigning each message its ID
    postResults.textContent = message; //appending the message to the final div inside the post to display

    let deleteBtn = document.createElement("button");
    deleteBtn.classList = "delete_button";
    deleteBtn.textContent = "DELETE";
    deleteBtn.id = "delete_button" + msgId;
    deleteBtn.addEventListener("click", () => {
      deletePost(API_URL + "/" + msgId);
    });

    post.appendChild(deleteBtn);
}



// This functions will display all of the posts from the API to the forum page
// function getMessages() {
//   fetch(API_URL)
//     .then((resp) => resp.json()) //converting the fetch resp to json
//     .then((data) =>
//       data.forEach((result) => {
//         let msgId = result.message_id; // this will just assign the post an ID, could be useful for deleting or changing specific posts
//         let message = result.message; // transferring the message from the post to a variable
//         let reacts = result.react; // reacts and comments arent being used yet but stored those properties into variables for later
//         let comments = result.comments;
//         // the messages array has .forEach applied to it, which then will create a series of divs with classes to be appended to each other to make the 'post'

//         let post = document.createElement("div"); // post container
//         post.classList = "post";
//         let postAvatar = document.createElement("div"); //div for the avatar
//         postAvatar.classList = "post__avatar";
//         let profileImg = document.createElement("img"); // avatar image
//         profileImg.src = "assets/imgs/hackerprofile.png"; // avatar image
//         profileImg.alt = "Profile Icon";
//         postAvatar.appendChild(profileImg);

//         // making the post body and post header divs, for which the message text will be eventually added.

//         let postBody = document.createElement("div");
//         postBody.classList = "post__body";
//         post.appendChild(postAvatar);
//         post.appendChild(postBody);
//         let postHeader = document.createElement("div");
//         postHeader.classList = "post__header";
//         postBody.appendChild(postHeader);
//         let postHeaderText = document.createElement("div");
//         postHeaderText.classList = "post__headerText";

//         // making the header, and spans which contain the anonymous poster name with the check symbol and @anonymous tag

//         let h3 = document.createElement("h3");
//         let span1 = document.createElement("span");
//         span1.classList = "post__headerName";
//         span1.textContent = "Anonymous";
//         let span2 = document.createElement("span");
//         span2.classList = "material-icons post__badge";
//         span2.textContent = "check_circle";
//         let span3 = document.createElement("span");
//         span3.classList = "post__headerSpecial";
//         span3.textContent = "@anonymous";
//         h3.appendChild(span1);
//         h3.appendChild(span2);
//         h3.appendChild(span3);
//         postHeaderText.appendChild(h3);

//         // creating the last divs which contain the actual message

//         let postHeaderDescription = document.createElement("div");
//         postHeaderDescription.classList = "post__headerDescription";
//         let postResults = document.createElement("p");
//         postResults.classList = "latestPostsOutput";
//         postHeaderDescription.appendChild(postResults);
//         postHeader.appendChild(postHeaderText);
//         postHeader.appendChild(postHeaderDescription);
//         postContainer.appendChild(post);

//         message.classList = msgId; // assigning each message its ID
//         postResults.textContent = message; //appending the message to the final div inside the post to display

//         let deleteBtn = document.createElement("button");
//         deleteBtn.classList = "delete_button";
//         deleteBtn.textContent = "DELETE";
//         deleteBtn.id = "delete_button" + msgId;
//         deleteBtn.addEventListener("click", () => {
//           deletePost(API_URL + "/" + msgId);
//         });

//         post.appendChild(deleteBtn);
//       })
//     )
//     .catch
//     (console.warn)
// }

async function deletePost(url) {
  try {
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    window.location.reload();
  } catch {
    (console.warn)
  }
}



 

// // Giphy API key
// let APIKEY = "bsmGT5Kv6ZHaU7EQ6wHi6rbj174B65M2";

// // linking Giphy API to DOM

// document.addEventListener("DOMContentLoaded", init);
// function init() {
//   document
//     .getElementById("gif-search-button") //placeholder ID used, change to whatever the gif search button is
//     .addEventListener("click", (e) => {
//       e.preventDefault();
//       let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&g=`;
//       let str = document.getElementById("search").value.trim();
//       url = url.concat(str); // adds search query onto the url before fetching it
//       fetch(url)
//         .then((res) => res.json())
//         .then((content) => {
//           console.log(content.data); //contains all the GIF data
//           console.log("META", content.meta); // the meta just tells us if the query was successful or not
//           let gifSelection = document.createElement("div");
//           content.data.forEach((gif) => {
//             let img = document.createElement("img");
//             img.src = gif.images.downsized.url;
//             gifSelection.appendChild(imgSrc); // This **should** create a menu which displays all of the GIFs you searched for
//           });
//         });
//     });
// }



module.exports = {
  getMessages,
  deletePost,
  postMessage,
  appendResults,
  appendResult
}
