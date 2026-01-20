// SELECT ALL <p> ELEMENTS (HTMLCollection)
const paragraphs = document.getElementsByTagName("p");

// ACCESS BY INDEX
if (paragraphs.length > 0) {
  console.log(paragraphs[0].innerText);
}

// LOOP USING length
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// HTMLCollection IS NOT AN ARRAY
console.log(Array.isArray(paragraphs));

// CONVERT TO ARRAY IF NEEDED
const paragraphArray = Array.from(paragraphs);
paragraphArray.forEach(p => console.log(p.innerText));
