// function sum(a, b) {
//     let c = a + b;
//     return c;
// }

// console.log(sum(10, 30));
// console.log(sum(10, -25));
// console.log(sum(120, 30));

// const sum = function(a, b) {
//     var c = a + b;

//     return c;

// }

// console.log(sum(10, 30));

// const sum = function(a, b) {
//     if (typeof a === 'undefined') { a = 0 };
//     if (typeof b === 'undefined') { b = 0 };

//     var c = a + b;

//     return c;

// }

// console.log(sum(10));

function sumAll() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];

    }


    return total;

}

console.log(sumAll(10, 20, 30, 40, 50));