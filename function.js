//1st method its called declaration function

// function returnValue(parameter) {
//     return parameter;
// }
// let a = returnValue(5);
// console.log(a+b);


//2nd method its called expression function

// const returnValue=function(parameter){
//     return parameter;
// }
// let sixSquare=returnValue(6);
// const returnValue1=function(parameter1){
//     return parameter1;
// };
// let sixSquare=returnValue1(6);

// let a;
// console.log(a);
//var sabse pahle hoist ho jata h agr iski jagah let hota to error aata pr isme undefined aayega
//agr ham neeche var declare krte h to upr waale ko pta chal jata h pr AGR HAM 
//hoisting


//function types??? read
//default paarameter
// function returnVAlue(value= "u have not given any argument"){
//     return value;
// }
// let returnValue1=returnVAlue(5
    
// );
// console.log(returnValue1);

//rest parameter
//  function sum(...number){
//     let overallSum=0;
//     for(const number){
//         overallSum+=i;
//     }
// console.log(number);
//  }
//  sum(1,2,3,4,5);
//  sum(10,20);
//  sum();

 //ques//function initializer banana
    //takes atmost 3 parameters
    //if 1 parameter return its operator
    //if 2 parameters return its 
    //if 3 parameters return its sum
    //if more than 3 parameters return "u have exceeded the limit"

// 
//function Sum(...numbers){
//     let overallsum = 0;
//     for(let num of numbers){
//         oversum += num;
//     }
//     return oversum;
// }
// const value = sum(1, 2, 3, 4, 5);
// console.log(sum(1, 2, 3, 4, ));

//user se  year of birth like 2006 and print the all years till age 18 and tell the age of the user


// const findAge = function(birthYear, currentYear) {
//   return currentYear - birthYear;
// };


// let birthYear = parseInt(prompt(" birth year:"));
// let currentYear = parseInt(prompt("current year:"));

// for (let i = birthYear; i <= currentYear; i++) {
//   console.log(i);
// }


// let age = findAge(birthYear, currentYear);
// console.log(" age = " + age);


//2method working
/*const calcAge = function(birthYear, currentYear) {
    for(let i=birthYear; i<=2025; i++){
        console.log(i);
    }
    return 2025 - birthYear;
  };
  const myAge = calcAge(2000);
    console.log("My age is: " + myAge);*/
    // const container=docunemt .querySelector('.container');
    // container.innerHTM<h style="color:red"></h>