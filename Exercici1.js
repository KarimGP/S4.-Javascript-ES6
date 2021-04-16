//PRIMERA FUNCIÓ
/*function multiply(num1, num2) {
    return num1 * num2;
 }*/

let multiply = (num1, num2) => num1*num2;

 
//SEGONA FUNCIÓ
 /*function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
 }*/

 let toCelsius = fahrenheit => (5/9)*(fahrenheit-32);
 
 //TERCERA FUNCIÓ
 // This function returns a string padded with leading zeros
 /*function padZeros(num, totalLen) {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
  } */

  const padZeros = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    
    for (var i = 1; i <= numZeros; i++) {

       numStr="0" + numStr; 
       } 
    return numStr;
  } 

  
//CUARTA FUNCIÓ
 /*function power(base, exponent) { 
   var result=1; 
   for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
} */

 const power = (base, exponent) => { 
    var result=1; 
    for (var i=0; i < exponent; i++) { 
          result *=base; 
    } 
    return result;
 } 
 
 //CINQUENA FUNCIÓ
 /*function greet(who) {
     console.log("Hello " + who);
 }*/

 /* let greet = who => {
    let {nombre} = who;
    console.log(greet(`Hello ${nombre}`));
 } */

 let greet = () => 'Hello who'
console.log(greet());
