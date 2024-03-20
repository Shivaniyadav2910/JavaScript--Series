// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
/* the reason is that an equality check== and 
comparisons > < >= <= work diffrently comparisons convert null to a number,
treating it is 0.Thats why (3) null>=0 is true and (1) null>0 is false*/

console.log(undefined ==0);
console.log(undefined>0);
console.log(undefined<0);

//=== equal value and equal data type and ==
console.log("2"===2);
console.group("2"==2);