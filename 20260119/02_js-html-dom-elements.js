// CREATE AND APPEND A NEW ELEMENT
const para = document.createElement("p");
const textNode = document.createTextNode("This is new.");
para.appendChild(textNode);

const container = document.getElementById("div1");
container.appendChild(para);

// INSERT BEFORE AN EXISTING ELEMENT
const paraBefore = document.createElement("p");
paraBefore.appendChild(document.createTextNode("Inserted before p1"));

const firstPara = document.getElementById("p1");
container.insertBefore(paraBefore, firstPara);

// REMOVE ELEMENT USING remove()
const removeElement = document.getElementById("p2");
if (removeElement) {
  removeElement.remove();
}

// REMOVE ELEMENT USING parentNode (OLDER BROWSER SUPPORT)
const childToRemove = document.getElementById("p1");
if (childToRemove) {
  childToRemove.parentNode.removeChild(childToRemove);
}

// REPLACE AN EXISTING ELEMENT
const newPara = document.createElement("p");
newPara.appendChild(document.createTextNode("This paragraph replaced the old one"));

const oldPara = document.getElementById("p3");
if (oldPara) {
  oldPara.parentNode.replaceChild(newPara, oldPara);
}

// LOG ACTIONS
console.log("DOM elements created, inserted, removed, and replaced successfully");
