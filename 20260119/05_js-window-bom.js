// WINDOW OBJECT (GLOBAL SCOPE)
console.log(window === this);

// ACCESS DOCUMENT VIA WINDOW
console.log(window.document.title);

// WINDOW SIZE
const width = window.innerWidth;
const height = window.innerHeight;
console.log("Width:", width, "Height:", height);

// GLOBAL VARIABLES BECOME WINDOW PROPERTIES
var appName = "Demo App";
console.log(window.appName);

// GLOBAL FUNCTIONS BECOME WINDOW METHODS
function showMessage() {
  console.log("Hello from window");
}
window.showMessage();

// WINDOW METHODS
// window.open("https://example.com");
// window.close();
// window.moveTo(100, 100);
// window.resizeTo(800, 600);
