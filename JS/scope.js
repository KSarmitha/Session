/* Global scope */
function a() {
    c();

    function c() {
        console.log(b);
    }
}

// var b = 10;
// a();

/* let & const */
// console.log("Print");
// console.log(a)
// let a = 10;
// var b = 100;


/* Example:1 */
// console.log("Print");
// let c = 10;
// let c = 100;

/* Example:2 */
// console.log("Print");
// var d = 100;
// let d = 10;

/* Example:3 */
// console.log("Print");
// const e;
// e = 10;

/* Example:4 */
//  console.log("Print");
//  const f = 100;
//  f = 10;


/* Block Hoisting */
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
// }
    // console.log(a);
    // console.log(b);
    // console.log(c);

/* Example:5 */
// let x = 10;
// {
//     let x = 20;
//     console.log("inside block", x);
// }

// console.log("outside of block", x);

/* Example:6 */
// var c = 100;
// function x() {
//     // var c = 30;
//     console.log("inside function", c);
// }

// x();
// console.log("outside of function", c);

/* Example: 7 */
// const y = 10;
// {
//     const y = 100;
//     {
//         const y = 1000; 
//         console.log(y);
//     }
// }

/* TDZ */
// console.log(a);
// let a = 10;