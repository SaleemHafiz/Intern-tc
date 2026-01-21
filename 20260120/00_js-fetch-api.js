// Function to display data
function myDisplay(data) {
  document.getElementById("demo").innerHTML = data;
}

// Using fetch() with Promises
fetch('sample.txt')
  .then(response => response.text())
  .then(data => myDisplay(data))
  .catch(error => console.error('Error:', error));

// Using fetch() with async/await
async function getText(file) {
  try {
    let response = await fetch(file);
    let text = await response.text();
    myDisplay(text);
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the async function
getText('sample.txt');
