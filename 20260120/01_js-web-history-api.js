// Go back one page
function goBack() {
  window.history.back();
}

// Go forward one page
function goForward() {
  window.history.forward();
}

// Go to a specific page in history (e.g., 2 pages back)
function goPages(n) {
  window.history.go(n);
}

// Display the number of URLs in history
document.getElementById("demo").innerHTML =
"History length: " + window.history.length;
