// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// //Math operators 

// yearJohn = now - ageJohn;
// yearMark = now- ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// //logical operators 

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof operator 

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than john ')
// var x;
// console.log(typeof x);

//operator precedence 

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
//Multiple operators
var isFullAge = now - yearJohn >= fullAge; 
console.log(isFullAge);

//Grouping
var  ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average)

//Multiple assingment 

var x, y;
x = y = (3+5)*4-6;
console.log(x, y);

// more operators 

x *= 2;
console.log(x);
x += 10;
console.log(x);
x -= 20;
console.log(x);

// Body Mass Index 
let massMark = 78; //kg
let heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;


var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn)

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s  BMI higher than John\'s?' + markHigherBMI);

