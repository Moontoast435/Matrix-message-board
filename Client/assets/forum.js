const API_URL = "https://evening-retreat-34987.herokuapp.com/messages";

function postMessage(e) {
  e.preventDefault(); // prevents page reload before the function can be carried out
  const commentBoxData = document.getElementById("feedInput").value; // targets the input box and takes its value to be stored in commentBoxData
  if (commentBoxData.trim()) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // submits the data in urlencoded form
      },
      body: new URLSearchParams({
        message: commentBoxData, // takes the input value and passes it to the message parameter to be posted to the API
      }),
    })
      .then((res) => {
        window.location.reload();
      })
      .catch(console.warn);
  }
}

let postContainer = document.getElementById("post-container");

// This functions will display all of the posts from the API to the forum page
function getMessages() {
  fetch(API_URL)
    .then((resp) => resp.json()) //converting the fetch resp to json
    .then((data) => {
      data.reverse();
      data.forEach((result) => {
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

        let kekReact = document.createElement("div"); // Create a container for the emoji button and the counter
        let kekButton = document.createElement("img"); // Create new img element in HTML
        let kekCount = document.createElement("p"); // Create a p element for the counter
        kekReact.setAttribute("class", "reactcontainer");
        kekReact.id = "kek";
        kekButton.src = "./assets/imgs/kekw.jpg"; // Insert the path to the image file
        kekButton.alt = "Kekw Emoji";
        kekButton.setAttribute("class", "emojibutton"); // Set attributes like id, class, name, etc here.
        kekCount.textContent = result.react[0].kek; // Sets the number of times the emoji has been clicked
        kekCount.setAttribute("class", "emojicounter");
        kekReact.append(kekButton, kekCount);
        post.append(kekReact);
        kekButton.addEventListener("click", () => {
          fetch(API_URL + "/" + msgId + "/reacts", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // submits the data in urlencoded form
            },
            body: new URLSearchParams({
              kek: "",
            }),
          })
            .then((res) => {
              window.location.reload();
            })
            .catch(console.warn);
        });

        let kappaReact = document.createElement("div"); // Create a container for the emoji button and the counter
        let kappaButton = document.createElement("img"); // Create new img element in HTML
        let kappaCount = document.createElement("p"); // Create a p element for the counter
        kappaReact.setAttribute("class", "reactcontainer");
        kappaButton.src = "./assets/imgs/kappa.png"; // Insert the path to the image file
        kappaButton.alt = "Kappa Emoji";
        kappaButton.setAttribute("class", "emojibutton"); // Set attributes like id, class, name, etc here.
        kappaCount.textContent = result.react[1].kappa; // Sets the number of times the emoji has been clicked
        kappaCount.setAttribute("class", "emojicounter");
        kappaReact.append(kappaButton, kappaCount);
        post.append(kappaReact);
        kappaButton.addEventListener("click", () => {
          fetch(API_URL + "/" + msgId + "/reacts", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // submits the data in urlencoded form
            },
            body: new URLSearchParams({
              kappa: "",
            }),
          })
            .then((res) => {
              window.location.reload();
            })
            .catch(console.warn);
        });

        let pepeHandsReact = document.createElement("div"); // Create a container for the emoji button and the counter
        let pepeHandsButton = document.createElement("img"); // Create new img element in HTML
        let pepeHandsCount = document.createElement("p"); // Create a p element for the counter
        pepeHandsReact.setAttribute("class", "reactcontainer");
        pepeHandsReact.id = "pepeHands";
        pepeHandsButton.src = "./assets/imgs/pepehands.png"; // Insert the path to the image file
        pepeHandsButton.alt = "PepeHands Emoji";
        pepeHandsButton.setAttribute("class", "emojibutton"); // Set attributes like id, class, name, etc here.
        pepeHandsCount.textContent = result.react[2].pepeHands; // Sets the number of times the emoji has been clicked
        pepeHandsCount.setAttribute("class", "emojicounter");
        pepeHandsReact.append(pepeHandsButton, pepeHandsCount);
        post.append(pepeHandsReact);
        pepeHandsButton.addEventListener("click", () => {
          fetch(API_URL + "/" + msgId + "/reacts", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // submits the data in urlencoded form
            },
            body: new URLSearchParams({
              pepeHands: "",
            }),
          })
            .then((res) => {
              window.location.reload();
            })
            .catch(console.warn);
        });

        let commentBtn = document.createElement("button");
        commentBtn.classList = "comment_button";
        commentBtn.id = msgId;
        commentBtn.textContent = "COMMENT";
        post.appendChild(commentBtn);
        commentBtn.addEventListener("click", () => {
          getComments(API_URL + "/" + msgId + "/comments", msgId);
        });

        let commentSubmitBtn = document.getElementById("submit_comment");

        commentSubmitBtn.addEventListener("click", () => {
          let commentBoxValue =
            document.getElementById("input_commentBox").value;

          fetch(API_URL + "/" + msgId + "/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // submits the data in urlencoded form
            },
            body: new URLSearchParams({
              comment: commentBoxValue, // takes the input value and passes it to the message parameter to be posted to the API
            }),
          })
            .then((res) => {
              window.location.reload();
            })
            .catch(console.warn);
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.classList = "delete_button";
        deleteBtn.textContent = "DELETE";
        deleteBtn.id = "delete_button" + msgId;
        deleteBtn.addEventListener("click", () => {
          deletePost(API_URL + "/" + msgId);
        });

        post.appendChild(deleteBtn);
      });
    })
    .catch(console.warn);
}

function getComments(url) {
  let commentsBox = document.getElementById("comments_box");
  commentsBox.style.display = "flex";

  let commentsContainer = document.getElementById("comments_content");

  let closeButton = document.getElementById("commentsBox_close");
  closeButton.addEventListener("click", () => {
    commentsBox.style.display = "none";
  });

  fetch(url)
    .then((resp) => resp.json())
    .then((commentsContainer.textContent = ""))
    .then((data) =>
      data.forEach((result) => {
        let comment = result.comment;

        let post = document.createElement("div");
        post.classList = "post";
        post.id = "comment_holder"; // post container
        let postAvatar = document.createElement("div"); //div for the avatar
        postAvatar.classList = "post__avatar";
        let profileImg = document.createElement("img"); // avatar image
        profileImg.src = "assets/imgs/hackerprofile.png"; // avatar image
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
        postResults.textContent = comment;
        commentsContainer.appendChild(post);
      })
    );
}

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
    console.warn;
  }
}

// Show GIFs Box

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.showModal();
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});

// Giphy API key

const APIKEY = "bsmGT5Kv6ZHaU7EQ6wHi6rbj174B65M2";
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("gifSearchButton").addEventListener("click", (ev) => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=6&q=`;
    let str = document.getElementById("gifSearch").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data);
        console.log("Meta", content.meta);

        let gifImg1 = document.createElement("img");
        gifImg1.src = content.data[0].images.fixed_width_small.url;
        gifImg1.alt = content.data[0].title;
        let out1 = document.querySelector(".grid__item1");

        let gifImg2 = document.createElement("img");
        gifImg2.src = content.data[1].images.fixed_width_small.url;
        gifImg2.alt = content.data[1].title;
        let out2 = document.querySelector(".grid__item2");

        let gifImg3 = document.createElement("img");
        gifImg3.src = content.data[2].images.fixed_width_small.url;
        gifImg3.alt = content.data[2].title;
        let out3 = document.querySelector(".grid__item3");

        let gifImg4 = document.createElement("img");
        gifImg4.src = content.data[3].images.fixed_width_small.url;
        gifImg4.alt = content.data[3].title;
        let out4 = document.querySelector(".grid__item4");

        let gifImg5 = document.createElement("img");
        gifImg5.src = content.data[4].images.fixed_width_small.url;
        gifImg5.alt = content.data[4].title;
        let out5 = document.querySelector(".grid__item5");

        let gifImg6 = document.createElement("img");
        gifImg6.src = content.data[5].images.fixed_width_small.url;
        gifImg6.alt = content.data[5].title;
        let out6 = document.querySelector(".grid__item6");
        
        out1.appendChild(gifImg1);
        out2.appendChild(gifImg2);
        out3.appendChild(gifImg3);
        out4.appendChild(gifImg4);
        out5.appendChild(gifImg5);
        out6.appendChild(gifImg6);
      })
      .catch((err) => {
        console.error("This didn't work.");
      });
  });
}

module.exports = {
  getMessages,
  deletePost,
  postMessage,
};
