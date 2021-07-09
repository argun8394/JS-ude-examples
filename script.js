/* let num1 = Number("5");
let num2 = Number("10");

let total = (num1 + num2);

console.log(total);
console.log(typeof total);

*/

/*
let val;

val = String(10);

console.log(val);
console.log(typeof val);

*/

/*
let bol;

bol = String(true);

console.log(bol);
console.log(typeof bol);

*/

/* date to string

val = String(new Date().getDate());

console.log(val)
console.log(typeof val);
console.log(val.length);
*/



/*
let val;
val = String([1, 2, 2, 3, 5]);

console.log(val)
console.log(typeof val);
console.log(val.length);
*/
/*let val;

val = (10).toString();

console.log(val)
console.log(typeof val);
console.log(val.length);

*/

/*let val;

val = (false).toString();

console.log(val)
console.log(typeof val);
console.log(val.length);

val = (false).toString();
*/

/*let val;

val = Number("10");

console.log(val)
console.log(typeof val);
console.log(val.toFixed(2));

*/

/*let val;

val = (false).toString();

console.log(val)
console.log(typeof val);
console.log(val.length);
*/


/* boolean to number
let val;

val = Number(true);

console.log(val)
console.log(typeof val);
console.log(val.toFixed(2));
*/


//* şimdiki tarih gün ay ve yıl

/*var dt = new Date();

console.log(dt);
console.log(dt.getDate());
console.log(dt.getMonth() + 1);
console.log(dt.getUTCFullYear());
*/

//* Tarih ve saat bilgisi içeren bir Date objesi oluşturma

/*var dtA = new Date("5/22/2019 11:35:55");
var dtB = new Date(2010, 5, 22, 11, 35, 55);

console.log(dtA);
console.log(dtB);

*/

//* 1/1/1990 Tarihinden bir gün öncesini gösterelm

/* 
var dtC = new Date("1/1/1990");
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);
console.log(dtC);
*/

// iki tarih arasındaki geçen zamanı bulalım

/*
var start = new Date("1/1/1990");
var end = new Date("2/10/1992");

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gün = saat / 24;

console.log("milisecon : " + milisecond);
console.log("saniye : " + saniye);
console.log("dakika : " + dakika);
console.log("saat : " + saat);
console.log("gün : " + gün);
*/


//  ** yaş hesaplama
/*
var birthday = new Date("8/1/1985");
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);
console.log(ageDifMs);
*/

//2022 yılında anneler günü hangi gün kutlanacak
/*
var annelerGunu = new Date();
annelerGunu.setHours(0, 0, 0, 0);
annelerGunu.setFullYear(2022);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while (annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate() + 1)
}
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log(annelerGunu);
*/

