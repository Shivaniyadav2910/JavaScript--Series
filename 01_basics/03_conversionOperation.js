// let score=33;
// let score="33";
// let score="33abc";
// let score=null;
// let score=undefined;
let score=true;

// const {score} = req.body
console.log(typeof score);
console.log(typeof(score));

let valueInNumber =Number (score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33"=>33
//"33abc"=>NaN
//"true"=>1; false=>0

// let isLoggedIn=1;  //true
// let isLoggedIn="";  //false
// let isLoggedIn="shivani";  //ture
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=>ture; 0=>false
//""=>false
//"shivani"=>ture

let someNumber=33;

let sNumber=String(someNumber)
console.log(sNumber);
console.log(typeof sNumber);