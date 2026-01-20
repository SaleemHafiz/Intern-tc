// Selecting elements
const title = document.getElementById("title");
const items = document.getElementsByClassName("item");
const firstPara = document.querySelector("p");

// Changing content
title.textContent = "DOM Updated";

// Changing styles
title.style.color = "blue";

// Creating a new element
const newDiv = document.createElement("div");
newDiv.textContent = "This element was created using DOM";

// Appending element
document.body.appendChild(newDiv);

// Removing an element (if exists)
if (items.length > 0) {
  items[0].remove();
}

// Handling events
document.addEventListener("click", function () {
  console.log("Document clicked");
});
