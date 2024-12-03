/* Closure */
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}

x();

/* Example 1: function can return a function */
// function x() {
//     var a = 7;
//     return function y() {
//         console.log(a);
//     }
// }

// var z = x();
// z();


/* Example 2 */
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// z();

/* Example 3 */
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
//     a = 100;
// }

// var z = x();
// z();

/* Example 4 */
// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

/* Example 5 */
// function x() {
//     var i = 1;
//     setTimeout( function () {
//         console.log(i);
//     }, 3000);
//     console.log("Print");
// }

// x();

/* Example 6 */
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, 3000);
//     }
// }

// x();

/* Example 7 */
// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, 3000);
//     }
// }

/* Example 8 */
// function x() {
//     for (let i = 1; i <= 5; i++) {
//         function closure(i) {
//             setTimeout(() => {
//                 console.log(i)
//             }, 3000);   
//         }
//     }
//     closure(i);
// }