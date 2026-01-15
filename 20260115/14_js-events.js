// Click event
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", function() {
  console.log("Button was clicked");
});

// Input event
const input = document.createElement("input");
document.body.appendChild(input);

input.addEventListener("input", function(event) {
  console.log("Input value:", event.target.value);
});

// Mouseover event
const div = document.createElement("div");
div.textContent = "Hover over me";
div.style.width = "200px";
div.style.height = "50px";
div.style.backgroundColor = "lightblue";
document.body.appendChild(div);

div.addEventListener("mouseover", function() {
  console.log("Mouse is over the div");
});

// Window load event
window.addEventListener("load", function() {
  console.log("Page has loaded");
});
