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

let isLoggedIn=1;  //true
// let isLoggedIn="";  //false
// let isLoggedIn="shivani";  //ture
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=>ture; 0=>false
//""=>false
//"shivani"=>ture

let someNumber=33;

let sNumber=String(someNumber)
// console.log(sNumber);
// console.log(typeof sNumber);

//****************************Operation********************* */
let value=3
let negValue=-value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1="hello";
let str2="shivani";

let str3=str1+str2;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");

console.log((3+4)*5 % 3);

// console.log(+ture);
// console.log(+"");
let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
// gameCounter++;
++gameCounter;
// console.log(gameCounter); //101

// **********PostFix increment and Prefix increment***********/
let x=3;
const y=x++;
console.log(y);    //y is3
console.log(x);    //x is 4

let x2=3;
const y2=++x2;
console.log(x2);  //4
console.log(y2);//4
