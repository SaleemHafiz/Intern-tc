const box = document.getElementById("box");

// Pointer down event
box.addEventListener("pointerdown", (e) => {
  box.style.backgroundColor = "lightgreen";
  console.log(`Pointer down: id=${e.pointerId}, type=${e.pointerType}, pressure=${e.pressure}`);
});

// Pointer up event
box.addEventListener("pointerup", (e) => {
  box.style.backgroundColor = "lightblue";
  console.log("Pointer up");
});

// Pointer move event
box.addEventListener("pointermove", (e) => {
  console.log(`Pointer move: x=${e.clientX}, y=${e.clientY}`);
});

// Pointer enter / leave
box.addEventListener("pointerenter", () => box.style.border = "2px solid green");
box.addEventListener("pointerleave", () => box.style.border = "2px solid black");

// Disable pointer interactions temporarily
// box.style.pointerEvents = "none"; 
