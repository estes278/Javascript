// // This entire file is a scratch pad for doing exercises in Javascript. 
// // Feel free to un-comment any given section and execute the code to see the result of the exercise. 

// // Great way to perform operations on a varying number of parameters
// function sum()
// {
//     let sum = 0;
//     for(let value of arguments)
//         sum += value;
//     return sum;
// }

// // Can also use the "rest" operator to refer to the "rest" of the arguments
// // function sum(discount, ...prices)
// // where prices will be an array containing the rest of the parameters
// // The Rest parameter must be the last parameter in the list though! or we'll get an error

// // console.log(sum(1,2,3,4,5));

// // We can also set default values for parameters by using
// // the concept of Truthy
// function interest(principal, rate, years)
// {
//     rate = rate || 3.5; // Either use the given value of rate or make it 3.5
//     years = years || 5;
//     return principal * rate / 100 * years;
// }


// // The above is old school, the new way is to just
// // set the default values in the parameter list!
// // If no parameter value is given, the default is used instead
// // However, if we give a default value for a parameter, every parameter
// // after it needs a default value as well or the function will fail
// // to run properly. We can also get around this by passing in "undefined"
// // for properties which we want to use the default value
// function interest(principal, rate = 3.5, years = 5)
// {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000, 4, 10));
// console.log(interest(10000)); // This one uses our default values
// console.log(interest(10000, undefined, 6)); // This one will use the default for rate but takes 6 for years

// Can treat getters and setters like properties
// const person = {
//     firstName: 'Allan',
//     lastName: 'Estes',
//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set fullName(value) {      
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];            
//     }
// };

// console.log(person.fullName);

// person.fullName = 'Trevor Belmont';

// console.log(person.fullName);
// console.log(person.firstName);
// console.log(person.lastName);

// try
// {
//     person.fullName = 0;
// } catch(error) {
//     console.log("Error caught! Details: " + error);    
// }

// Scope
// Variables are accessible within the block they are defined
// If they are not defined in a block, they are global
// Local variables supercede global ones and will be used instead

// Let vs Var
// Var is function scope, while const and let are block scope
// Var causes too many conflicts and is rarely used now

// This keyword

// When used inside an object declaration or a function belonging to an object,
// this will refer to the object
// When used in a global function or any function not attached to an object,
// it will reference the window object (for browsers) or "global" for node

// const video = {
//     title: 'Castlevania',
//     tags: ['Horror', 'Action', 'Fantasy'],
//     showTags() {
//         for(let current of this.tags)
//             console.log(this.title + ": " + current);            
//     }
// }

// video.showTags();

// function playVideo(a, b) {
//     console.log(this +' a ' + ' b ');    
// }

// const person = {firstName: 'Allan'};
// playVideo.call(person, 1, 2);
// playVideo.apply(person, [3,4]);
// playVideo.bind(person)();

// Exercises

// Sum takes in a varying number of args and returns their sum

// function sum()
// {
//     // First check to see if the argument is an array
//     // Needs to be handled a bit differently
//     if(Array.isArray(arguments[0]))
//     {
//         // We don't know whether it will be a number or string
//         // so start out with the type of the first index
//         let temp = arguments[0];
//         let result = temp[0];
//         for(let i = 1; i < temp.length; i++)
//             result += temp[i];
//         return result;        
//     }
    
//     // We don't know whether it will be a number or string
//     // so start out with the type of the first index
//     let result = arguments[0];
//     for(let i = 1; i < arguments.length; i++)
//         result += arguments[i];
//     return result;
// }

// console.log(sum(1,2,3));
// console.log(sum('1','2','3'));
// console.log(sum(true,true,false));
// console.log(sum([1,2,3]));

// Circle area

const circle = {
    radius: 2,
    get area() {
        return this.radius * this.radius * Math.PI;
    }
}

console.log(circle.area);
