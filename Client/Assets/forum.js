// // Create New Posts
// const form = document.querySelector("form");
const API_URL = "https://evening-retreat-34987.herokuapp.com/messages";

// form.addEventListener("submitButton", (event) => {
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

let postContainer = document.getElementById("post-container");

function getMessages() {
  fetch(API_URL)
    .then((resp) => resp.json())
    .then((data) =>
      data.forEach((result) => {
        console.log(result);
        let post = document.createElement("div");
        post.classList = "post";
        let postAvatar = document.createElement("div");
        postAvatar.classList = "post__avatar";
        let profileImg = document.createElement("img");
        profileImg.src = "assets/imgs/hackerprofile.png";
        profileImg.alt = "Profile Icon";
        postAvatar.appendChild(profileImg);
        let postBody = document.createElement("div");
        postBody.classList = "post__body";
        post.appendChild(postAvatar);
        post.appendChild(postBody);
        let postHeader = document.createElement("div");
        postHeader.classList = "post__header";
        postBody.appendChild(postHeader);
        let postHeaderText = document.createElement("div");
        postHeaderText.classList = "post__headerText";

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
        let postHeaderDescription = document.createElement("div");
        postHeaderDescription.classList = "post__headerDescription";
        let postResults = document.createElement("p");
        postResults.classList = "latestPostsOutput";
        postHeaderDescription.appendChild(postResults);
        postHeader.appendChild(postHeaderText);
        postHeader.appendChild(postHeaderDescription);
        postContainer.appendChild(post);
        let msgId = result.message_id;
        let message = result.message;
        let reacts = result.react;
        let comments = result.comments;
        message.classList = msgId;
        postResults.textContent = message;
      })
    );
}

/*function appendResults(data) {
  data.forEach((r) => {
    postResults.append(makeMessage(r.message));
  });
}

function makeMessage(msg) {
  const message = document.createElement("h3");
  message.textContent = `${msg}`;
  return message;
} */
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
