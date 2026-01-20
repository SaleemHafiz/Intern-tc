// Alert box
alert("I am an alert box!");

// Confirm box
let confirmResult = confirm("Press a button!");
if (confirmResult) {
  console.log("You pressed OK!");
} else {
  console.log("You pressed Cancel!");
}

// Prompt box
let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
console.log(text);

// Alert box with line breaks
alert("Hello\nHow are you?");
