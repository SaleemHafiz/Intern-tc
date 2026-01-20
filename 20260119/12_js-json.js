// JSON string
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// Convert JSON string to JavaScript object
const obj = JSON.parse(text);

// Access object data
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;

// Convert JavaScript object back to JSON string
const jsonString = JSON.stringify(obj);
console.log(jsonString);
