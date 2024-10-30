// // This entire file is a scratch pad for doing exercises in Javascript. 
// // Feel free to un-comment any given section and execute the code to see the result of the exercise. 

// // Comments just live Java
// /* Can also be done like so */



// console.log("Let's Go DEVILS!!!");
// let myName = 'Allan';
// console.log(myName);
// let age = 30;
// let person = 
// {
//     firstName: "Nico",
//     age: 27,
//     position: "Center"
// };

// console.log(person);

// let colors = ['red','blue','green'];

// console.log(colors);

// colors[0] = 5;

// console.log(colors);

// function score(firstName) 
// {
//     console.log("Let's Go DEVILS!!! roflcopter " + firstName);
// }

// score(person.firstName); 

// let colors = ['red','blue','green'];

// for(let x in colors)
//     console.log(x);

// for(let color of colors)
//     console.log(color)

// let person = 
// {
//     firstName: "Nico",
//     age: 27,
//     position: "Center"
// };

// for(let x in person)
//     console.log(person[x]);

// function max(x,y)
// {
//     if( x > y) return x;
//     return y;
// }

// let number = max(11,10);
// console.log(number); 

// // Fizz Buzz Test
// // First check typeof to make sure if it's a number, if not, return NaN
// // If divisible by 5 and 3, return FizzBuzz
// // if only divisible by 3, return Fizz
// // if only divisible by 5, return Buzz
// // if not divisible by either, return the input unchanged

// function fizzBuzz(x)
// {    
//     if (typeof x !== 'number')
//         return NaN;

//     let output = "";
//     let divisibleByThree = (x % 3 == 0);
//     let divisibleByFive = (x % 5 == 0);
   
//     if(divisibleByThree && divisibleByFive)
//         output = "FizzBuzz";
//     else if(divisibleByThree)
//         output = "Fizz";
//     else if(divisibleByFive)
//         output = "Buzz";
//     else output = x;
//     return output;
// }

// console.log(fizzBuzz(25)); 

// // Speed Limit Test
// // Speed limit = 70
// // Every 5mph above -> 1 point
// // More than 12 points -> license suspensed

// function checkSpeed(speed)
// {
//     const speedLimit = 75;
//     if(speed < speedLimit)
//         return "Not Speeding";
//     let points = 0;
//     let tempSpeed = speed;
//     for(; tempSpeed >= 75; tempSpeed -= 5)
//         points++;
//     if(points > 12)
//         return "License Suspended";
//     return ("Points: " + points);
// }

// console.log(checkSpeed(150)); 

// // Count Truthy

// // Falsy Values
// // undefined
// // null
// // ''
// // false
// // 0
// // NaN

// const test = [0, null, undefined, '', 2, 3];

// function countTruthy(array)
// {
//     My Original Code
//     let truthyCount = 0;
//     const falsyList = [undefined, null, '', false, 0, NaN];
//     for(let i of array)
//     {
//         for(let x of falsyList)
//         {
//             if(i === x)
//                 truthyCount++;
//         }
//     }

//     return truthyCount;
 

//     // Correct Solution
//     let count = 0;
//     for(let value of array)
//         if(value) // This takes care of determining whether it is Truthy or not, no comparsions needed!
//             count++;
//     return count;

// }

// console.log(countTruthy(test)); 

// // Sum Limit

// console.log(sum(10));

// function sum(limit)
// {
//     let sum = 0;
//     for(let x = 0; x <= limit; x += 3)
//         sum += x;
//     for(let x = 0; x <= limit; x += 5)
//         sum += x;

//     return sum;
// } 



// // Calculate Average Grade
// // Use standard letter grade ranges, no + or -

// const marks = [80, 80, 50];

// console.log(calculateGrade(marks));

// function calculateGrade(marks)
// {
//     let sum = 0, count = 0;average = 0;
//     for(let x of marks)
//     {
//         sum += x;
//         count++;
//     }
//     average = sum / count;

//     let grade = '';
//     if(average < 60)
//         grade = 'F';
//     else if(average < 70)
//         grade = 'D';
//     else if(average < 80)
//         grade = 'C';
//     else if(average < 90)
//         grade = 'B';
//     else grade = 'A';

//     return "Your Grade Average: " + grade;

// } 

// // Show stars, start at one star for row one, two stars for row two, etc
// // keep going up to the given input number 
//     showStars(7);

//     function showStars(rows)
//     {
//         let currentLine = '';
//         for(let x = 1; x <= rows; x++)
//         {
//             for(let y = x; y > 0; y--)
//             {
//                 currentLine += '*';
//             }
//             console.log(currentLine);
//             currentLine = '';
//         }
//     } 

// showPrimes(30);

// function showPrimes(limit)
// {
//     let isPrime = true;
//     for(let x = limit; x > 1; x--)
//     {
//         for(let y = x-1; y > 1; y--)
//         {
//             if(x % y === 0)
//             {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime) console.log(x);
//         isPrime = true;
//     }
// } 

