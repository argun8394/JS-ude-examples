// Scopes

// ** Global Scopes
var name = 'argun';
var age = 30;

function logName() {
    var name = "Berra";
    var age = '12';
    console.log('function scope', name, age);
}


if (true) {
    var age = 30;
    console.log('block scope', name, age);
}

console.log(age);

logName();
console.log(name);


// ** Local Scopes

// Fonksiyonlar kendi scope 'larını oluşturur.
// **Block'lar yeni scope oluşturmaz.
// ES6 ile gelen let ve const block scope oluşturur.

console.log('*********************');

if (true) {
    var model = 'Hyundai';
    let year = 2016;
    const color = 'white';
    console.log('block scope', model, year, color);
}
console.log(model);
//console.log(color);

var i = 1;

for (let i = 0; i < 10; i++) {
    console.log('i', i);
}

console.log(i);