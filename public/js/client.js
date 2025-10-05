const socket = io();

// To get DOM elements
const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");
var audio = new Audio("./assets/ding.mp3");
const joinOverlay = document.getElementById("join-overlay");
const joinForm = document.getElementById("join-form");
const nameInput = document.getElementById("nameInput");

let name;

// User name take input
joinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  name = nameInput.value.trim();
  if (name) {
    joinOverlay.style.display = "none";
    socket.emit("new-user-joined", name);
  }
});

// Function which append info to container
const appends = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);

  messageContainer.scrollTop = messageContainer.scrollHeight;

  if (position == "left") {
    audio.play();
  }
};

// If form submitted, send server the message 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if(message){
    appends(`You: ${message}`, "right");
    socket.emit("send", message);
  }
  messageInput.value = "";
});


// If user join, get user name from server
socket.on("user-joined", (name) => {
  appends(`${name} joined the chat`, "center");
});

// If server send message get it
socket.on("receive", (data) => {
  appends(`${data.name} : ${data.message}`, "left");
});

// User leave then append to container
socket.on("gone", (name) => {
  appends(`${name} left the chat`, "center");
});
