const submitBtn = document.getElementById("commentBox__commentButton");

submitBtn.addEventListener("click", (e) => {
    postMessage(e);
});

// Show GIFs

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

getMessages();
