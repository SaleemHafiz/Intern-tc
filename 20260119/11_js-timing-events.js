// setTimeout example
function sayHello() {
  alert('Hello');
}
let timeoutVar = setTimeout(sayHello, 3000);

// Stop setTimeout before it executes
// clearTimeout(timeoutVar);

// setInterval example
function showTime() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
let intervalVar = setInterval(showTime, 1000);

// Stop setInterval after some time
// clearInterval(intervalVar);
