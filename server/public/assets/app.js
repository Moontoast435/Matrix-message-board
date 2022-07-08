const submitBtn = document.getElementById("commentBox__commentButton");

submitBtn.addEventListener("click", (e) => {
    postMessage(e);
});
getMessages();
