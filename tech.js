// var score=0;
// if(true){
// console.log("inside if:",score);
// }
// console.log("outside if:",score);

// var name="Alice";
// var name="Bob";
// console.log(name);

// let name="Alice";
// let name="Bob";
// console.log(name);

//nonprimitive data type store in heap thats why address is stored in stack its not changed
// let score=0;
// const playerName="Meenu";
// function answerQuestion(isCorrect){
//     if(isCorrect){
//         score+=10;
//     }
// }
// answerQuestion(true);
// answerQuestion(false);
// console.log(playerName+" 's score is: ",score);

//arrow function


// const add=(a,b);
// return a+b;

// const double=(num)=> num*2;
// console.log(double(5));

// function greet(name){   
//     return "Hello, " + name + "!";
// }

// const greet = (name) =>  console.log("Hello, " + name + "!");

// function add(a, b) {
//     return a + b;
// }
// const sum = (a, b) => add(a, b);

// function isEven(num){
//     return num % 2 === 0;
// }
// const checkEven = (num) => isEven(num);


// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((num) => num * num);
// console.log(squares);

// let score=0;
// const  IncreaseScore=(points)=>(score += points);
// const Decreasescore=(points)=>(score -= points);

// IncreaseScore(10);
// Decreasescore(5);
// IncreaseScore(20);
// console.log("Final Score:",score);


// const name="Riya";
// const age=25;
// console.log("Hello,My name is " name+"and I am "age+" years old.");
// console.log(`Hello,My name is ${name} and I am ${age} years old.`);


// const person={
//     name:"jyoti",
//     age:"19",
//     city:"Mathura",
//     introduce: function(){
//         return `hello my name is ${this.name}`I am ${this.age} years old. I'm from ${this.city}`;
//     },
// };
//DESTURUCTUREING
// const herName=person.name;
// const herAge=person.age;
// const herCity=person.city;
// console.log(`Her name is ${herName}. She is ${herAge} years old. She is from ${herCity}.`);  

// let herAge="age";
// console.log(person[herAge]);
// person.birthYear=2025 - person.age ;
// // console.log(person);

// person.tellyourAge=function(){
//     console.log(`I am ${this.age} years old.`); 
// };
// person.tellyourAge();console.log(person.introduce());



//REST OPERATOR
// const fruits=["apple","banana","cheery"];
// const[first,second, ,fourth]=[
// "apple","banana","cheery","mango","grapes"

// ];
// console.log(first,second,fourth);
//spread operator
// const fruits=["apple","banana","cheery"];
// const morefruits=["mango","orange","grapes","pineapple"];
// const.combinedFruits=[...fruits,...morefruits];
// console.log(combinedFruits);


//rest parameters
// const fruits=["apple","banana","cheery"];
// const morefruits=["mango","orange","grapes","pineapple"];
// const.combinedFruits=[...fruits,...morefruits];
// const[first,...restfruits]=combinedFruits;


// function sum(...values){
// console.log(values);
// let sum=0;
// for(let i=0;i<values.length;i++){
//     sum +=values[i];    
// }
// console.log(Sum);
// }
// sum(1,2,3,4,5,6,7,8,9,10);
// sum(10,20,30);
// sum(5,15);



//delay function setTimeout
// console.log("10");
// setTimeout(() => console.log("20")
// ,5000);
// console.log("30");


//setinterval
// let count=1;
// const timer=setInterval(() => {
//     console.log("hello:"+count);
//     count++;
//     if(count>5){
//         clearInterval(timer);
//         // stop after 5minutes}
//          },1000);