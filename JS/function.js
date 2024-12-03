/* Anonymous function */
// function () {

// }

/* Callback function */
// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback(); // Execute the callback function
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// // Call the greet function with a callback
// greet("Alice", sayGoodbye);
 
/* Example 2*/
// setTimeout(function() {
//     console.log("This is an anonymous function.");
// }, 1000);

/*High-order function */
// function authenticate() {
//     //code to authenticate user
// }

// function authorize() {
//     //code to authorize resources
// }

// function getData(authenticate, authorize) {     // high-order fn, authenticate() as n argument
//     if(authenticate) {
//         if(authorize) {
//             //fetch the data
//         }
//     }
// }

/* Arrow function (ES6) */
// const greet = () => {
//     console.log("Hello, world!");
// };

/* Pure function */
// function add(a, b) {
//     return a + b; // The result depends only on the input values
// }

/* First-class function */
// const greeting = function(name) {
//     return `Hello, ${name}!`;
// };