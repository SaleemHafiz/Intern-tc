// SELECT ALL <p> ELEMENTS (RETURNS NodeList)
const nodes = document.querySelectorAll("p");

// ACCESS BY INDEX
if (nodes.length > 1) {
  console.log(nodes[1].innerText);
}

// LOOP THROUGH NODELIST
for (let i = 0; i < nodes.length; i++) {
  nodes[i].style.color = "blue";
}

// NODELIST IS NOT AN ARRAY
console.log(Array.isArray(nodes));

// FOREACH WORKS ON NODELIST (MODERN BROWSERS)
nodes.forEach(node => {
  console.log(node.innerText);
});

// STATIC BEHAVIOR DEMO
const newPara = document.createElement("p");
newPara.innerText = "New paragraph";
document.body.appendChild(newPara);

// NodeList length will NOT change
console.log("NodeList length:", nodes.length);
