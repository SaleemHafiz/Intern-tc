// Creating date objects
const now = new Date();
console.log(now);

const specificDate = new Date("2026-01-15T10:30:00");
console.log(specificDate);

// Getting parts of a date
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth()); // 0-11
console.log("Day:", now.getDate());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// Setting parts of a date
now.setFullYear(2025);
now.setMonth(11); // December
now.setDate(25);
console.log("Updated date:", now);
