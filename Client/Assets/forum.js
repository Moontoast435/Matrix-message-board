// // Create New Posts
// const form = document.querySelector("form");
const API_URL = "https://evening-retreat-34987.herokuapp.com/messages";

// form.addEventListener("submitCommentBox", (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const profilePicture = formData.get("profileIcon");
//   const content = formData.get("postBodyContent");

//   const post = {
//     profilePicture,
//     content,
//     emojiOne: 0,
//     emojiTwo: 0,
//     emojiThree: 0,
//     comments: [],
//   };
//   fetch(API_URL, {
//     method: "POST",
//     body: JSON.stringify(post),
//     headers {
//     "content-type": "application/json",
//   },
//   });

// });

// // Fetch Latest Posts
// async function fetchLatestPosts() {
//   try {
//     const res = await fetch(API_URL);
//     .then((res) => res.json())
//       .then((data) => {

//         let output = ``

//         data.forEach(function (post) {
//           output += `

//           `;
//       });
//         document.getElementById("latestPostsOutput").textContent =
//           output + `<br>`;
//       });
//   } catch (err) {
//     console.log(`ERROR: ${err}`);
//   }
// }
let postResults = document.querySelector("#latestPostsOutput");

async function getMessages() {
  const getMessage = await fetch(API_URL)
    .then((resp) => resp.json())
    .then(data);
}

function appendResults(data) {
  data.forEach((r) => {
    postResults.append(makeMessage(r.message));
  });
}

function makeMessage(msg) {
  const message = document.createElement("h3");
  message.textContent = `${msg}`;
  return message;
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

getMessages();
