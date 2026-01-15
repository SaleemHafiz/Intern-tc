// UTF-8 strings
let text = "Hello, دنیا";
console.log(text);

// Emoji characters
let emoji = "😀🔥";
console.log(emoji);

// Length difference with UTF-8 characters
console.log("Length of text:", text.length);
console.log("Length of emoji:", emoji.length);

// Accessing characters

console.log(text[7]); 
// UTF-8 character

console.log(emoji[0]); 
// may show part of emoji

// Properly iterating UTF-8 characters
for (const char of emoji) {
  console.log(char);
}

// Encoding and decoding UTF-8
let encoded = encodeURIComponent("سلام 😀");
let decoded = decodeURIComponent(encoded);

console.log(encoded);
console.log(decoded);
