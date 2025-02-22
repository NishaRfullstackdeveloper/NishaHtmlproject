// // Function to reverse a name
// function reverseName(name) {
//     return name.split('').reverse().join('');
// }

// // Example usage
// const name = 'John Doe';
// const reversedName = reverseName(name);
// console.log(`Original Name: ${name}`);
// console.log(`Reversed Name: ${reversedName}`);
const http = require("http");
const server = http.createServer((req,res)=>{
res.write("hello reverse function");
res.end();
})

const address = "127.0.0.1";
const port = "8547";

function reverseFunction( name){
return name.split('').reverse().join('');

}

let name = "NISHA RAHUL CHAPKE ";
const reversedName = reverseFunction( name);

console.log( reversedName);

